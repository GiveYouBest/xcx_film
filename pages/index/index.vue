<template>
	<view>
		<view class="content">
			<view class="content_hed">
				<video :src="filmList[0].filmVedio" controls object-fit='contain' class="vid" autoplay="true"></video>
			</view>
		</view>
		<view class="footer">
			<text class="title">{{filmList[0].title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				filmList: [],
				url: 'https://souljs.cn:5000/xcx/getRand',
				Judegeurl: 'https://souljs.cn:5000/xcx/getJudgeStatus',
				controls: false,
				isTrue: getApp().globalData.isTrue
			}
		},
		onShow() {
			this.checkLoginStatus()
		},
		methods: {
			checkLoginStatus() {
				var _that = this
				uni.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							uni.getUserInfo({
								scope: 'scope.userInfo',
								success(result) {
									getApp().globalData.isTrue = true
									_that.isTrue = 'true'
									_that.getData()
								}
							})
						}else{
							getApp().globalData.isTrue = false
							uni.switchTab({
								url:'../mime/index'
							})
							uni.showToast({
								title:'请先授权!',
								icon:'none'
							})	
						}
					}
				})
			},
			getData() {
				let url = this.url
				let _that = this
				_that.AxiosPost(url, {}).then((res) => {
					if (res.data.status == 200) {
						_that.filmList = res.data.data
						if (res.data.data[0].filmVedio == '') {
							_that.AxiosPost(url, {}).then((res) => {
								_that.filmList = res.data.data
							})
						}
					} else {
						getApp().globalData.isTrue = false
						uni.showToast({
							title: '请先授权!',
							icon: 'none'
						})
					}
				})
			}

		}
	}
</script>

<style scoped>
	.content {
		width: 96%;
		height: 940rpx;
		margin: 0 2%;
		margin-top: 10%;
		/* border: 1rpx solid #ccc; */
		border-radius: 20rpx;
		box-sizing: content-box;
		box-shadow: 0px 1px 5px #dee6ff;
		background: #fdf8ff;
	}

	.footer {
		position: relative;
		width: 96%;
		height: 220rpx;
		box-shadow: 0px 1px 5px #dee6ff;
		margin: 0 2%;
		margin-top: 5%;
		border-radius: 20rpx 20rpx 0 0;
		box-sizing: content-box;
		background-color: #95ada0;
	}

	.vid {
		width: 100%;
		/* height: 100%; */
		border-radius: 20rpx;
		height: 940rpx;
	}

	.title {
		position: absolute;
		width: 95%;
		font-size: 45rpx;
		color: gold;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
