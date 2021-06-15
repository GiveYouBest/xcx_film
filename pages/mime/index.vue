<template>
	<view>
		<view class="mime" @tap="getUserMessage">
			<button class="thishi" open-type='getUserInfo' v-if="userInfo == ''">
				请点击授权
			</button>
			<view v-else>
				<view bindgetuserinfo="bindGetUserInfo" class="userPhoto">
					<image :src='userInfo.avatarUrl'></image>
				</view>
				<view class="userName">
					<text>{{userInfo.nickName}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: [],
				url: 'https://souljs.cn:5000/xcx/isTrue',
				Judegeurl: 'https://souljs.cn:5000/xcx/getJudgeStatus',
				uniUrl: 'https://souljs.cn:5000/xcx/wxLogin',
				saveUrl: 'https://souljs.cn:5000/xcx/saveData',
				getOppid:'https://souljs.cn:5000/xcx/dbOppid',
				isTrue: '',
				openid: ''
			}
		},
		onShow() {
			this.checkLoginStatus()
		},
		methods: {
			getLogin(code) {
				this.AxiosPost(this.uniUrl, {
					js_code: code
				}).then((res) => {
					this.openid = res.data.body.split('"openid":')[1].replace('}', '')
					uni.setStorageSync('tooken', res.data.tooken)
				})
			},
			checkLoginStatus() {
				var _that = this
				if (getApp().globalData.isTrue == false) {
					_that.getUserMessage()
				} else {
					uni.getSetting({
						success(res) {
							if (res.authSetting['scope.userInfo']) {
								uni.getUserInfo({
									scope: 'scope.userInfo',
									success(result) {
										_that.userInfo = result.userInfo
										getApp().globalData.isTrue = true
										uni.setStorageSync('isTrue', true)
									}
								})
							}
						},
						fail() {
							_that.getUserMessage()
						}
					})
				}

			},
			saveData(data) {
				this.AxiosPost(this.getOppid,{}).then((res)=>{
					let oppid = res.data.data
					for(var i=0;i<oppid.length-1;i++) {
						if(oppid[i].openid != data.openid) {
							this.AxiosPost(this.saveUrl, data).then((res) => {})
						}
					}
				})
			},
			getUserMessage() {
				var _that = this
				let status = getApp().globalData.isTrue
				if (status == true) {
					uni.showToast({
						title: '已经授权成功!',
						icon: "success"
					});
				} else {
					var _that = this
					var openid = ''
					uni.login({
						success(res) {
							if (res.code) {
								_that.AxiosPost(_that.uniUrl, {
									js_code: res.code
								}).then((res) => {
									openid = res.data.body.split('"openid":')[1].replace('}', '')
									uni.setStorageSync('tooken', res.data.tooken)
								})
								uni.getUserInfo({
									success: function(user) {
										_that.userInfo = user.userInfo
										var userInfo = user.userInfo
										let data = {
											openid: openid,
											code: res.code,
											nickName: userInfo.nickName,
											avatarUrl: userInfo.avatarUrl,
											gender: userInfo.gender,
											province: userInfo.province,
											city: userInfo.city,
											country: userInfo.country,
											language: userInfo.language,
											gender: userInfo.gender
										}
										_that.saveData(data)
										_that.isTrue = 'true'
										_that.AxiosPost(_that.url, {
											judge: true
										})
									}
								})
							} else {
								uni.showToast({
									title: '登录失败',
									icon: "none"
								})

							}
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
	.mime {
		position: relative;
		width: 750rpx;
		height: 200rpx;
		/* border: 1px solid #ccc ; */
		box-shadow: 0px 1px 5px #f2edff;
	}

	.userPhoto {
		position: absolute;
		width: 120rpx;
		height: 120rpx;
		left: 5%;
		top: 50%;
		transform: translate(0%, -50%);
	}

	.userPhoto image {
		width: 100%;
		height: 100%;
		border-radius: 150rpx;
	}

	.userName {
		position: absolute;
		top: 50%;
		left: 30%;
		transform: translate(0%, -50%);
		font-size: 35rpx;
	}

	.thishi {
		font-size: 36rpx;
		color: #007AFF;
		text-align: center;
		line-height: 200rpx;
	}
</style>
