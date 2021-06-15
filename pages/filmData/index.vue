<template>
	<view>
		<u-tabs ref="tabs" :list="tagList" bar-height="6" bar-width="40" active-color="#2979ff" @change="change" :current="current"
		 :duration='.3'></u-tabs>
		<view class="one public">
			<view class="loading" v-if='filmList.length<1'>
				<u-loading mode="flower" :show="true" size="80"></u-loading>
			</view>
			<view v-for="(item, index) in filmList" :key="index" class="imgFather" @tap="seeTheFilm(item.title)" v-else>
				<image :src="item.filmPic"></image>
				<text class="title">{{item.title}}</text>
				<text class="rate">评分:</text>
				<u-rate :count="5" :current="Number(item.rate)/2" class='rates'></u-rate><text class="rates_text">{{item.rate}}星</text>
				<text class="dri">导演:</text><text class="dri_val">{{item.film_Director}}</text>
				<!-- <text class="bianju">编剧:</text><text class="bianju_val"> {{item.film_Actors_Three}}</text> -->
				<text class="zhuyan">主演:</text><text class="zhuyan_val"> {{item.film_Actors_One.slice(0,12)}}</text><text class="zhuyan_val1">
					{{item.film_Actors_Two}} </text>
				<text class="country">国家:</text><text class="country_val">{{item.film_Place === '暂无'  ? '暂无':item.film_Place.split('/')[0] }}</text>
				<text class="lang">语言:</text><text class="lang_val">{{item.film_Place === '暂无'  ? '暂无':item.film_Place.split('/')[0]}}</text>
				<text class="date">上映日期: </text><text class="date_val">{{ item.film_Length ==='暂无' ?  '暂无':item.film_Length.slice(0,10) }}</text>
				<text class="length">片长:</text><text class="length_val">{{item.film_Place === '暂无'  ? '暂无':item.film_Place.split('/')[1]}}</text>
			</view>
		</view>
		<uni-load-more :status="loadingType" class='pulldown' v-if='nowPage < totalPage'></uni-load-more>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagList: [],
				filmList: [],
				current: '0',
				url: 'https://souljs.cn:5000/xcx/getfilmTypeDetail',
				Judegeurl: 'https://souljs.cn:5000/xcx/getJudgeStatus',
				filmCount: 0,
				triggered: true,
				loadingType: 'more',
				nowPage: 0,
				totalPage: 1,
				isTrue: getApp().globalData.isTrue
			}
		},
		onLoad() {
			this.getTagList()
			let url = this.url
			let current = this.current
			let filmTypeName = this.tagList.current
			this.getFilmData(url, '热门', 0),
			this.getFilmTypeCount('热门')
			this.isTrue = getApp().globalData.isTrue
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
									_that.getTagList()
								}
							})
						} else {
							getApp().globalData.isTrue = false
							uni.switchTab({
								url:'../mime/index'
							})
							uni.showToast({
								title: '请先授权!',
								icon: 'none'
							})
						}
					}
				})
			},
			getTagList() {
				var _that = this
				this.AxiosGet('https://souljs.cn:5000/xcx/getFilmTag', {}).then((res) => {
					if (res.data.status == 200) {
						_that.show = !_that.show
						for (var i = 0; i <= res.data.data.length - 1; i++) {
							_that.tagList.push({
								name: res.data.data[i].tagName
							})
						}
					}
				})
			},
			getFilmData(url, tagName, start) {
				this.filmList = []
				var _that = this
				this.AxiosPost(url, {
					tagName,
					start
				}).then((res) => {
					if (res.data.status == 200) {
						_that.filmList = res.data.data
					}
				})
			},
			seeTheFilm(title) {
				if (getApp().globalData.isTrue == true) {
					uni.navigateTo({
						url: '/pages/details/index?jsonStr=' + title
					})
				} else {
					uni.switchTab({
						url:'../mime/index'
					})
					uni.showToast({
						title: '请先授权!',
						icon: 'none'
					})
				}

			},
			change(index) {
				let _that = this
				var url = _that.url
				_that.current = index
				var tagName = _that.tagList[index].name
				switch (index) {
					case 0:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 1:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 2:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 3:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 4:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 5:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 6:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
					case 7:
						_that.getFilmTypeCount(tagName)
						_that.nowPage = 1
						_that.getFilmData(url, tagName, 1)
						break;
				}
			},
			getFilmTypeCount(typeName) {
				var _that = this
				let url = 'https://souljs.cn:5000/xcx/getTypeFilmCount'
				this.AxiosPost(url, {
					typeName
				}).then((res) => {
					if (res.data.status == 200) {
						let totalFilmNum = res.data.data[0].filmCount
						_that.totalPage = Math.ceil(Number(totalFilmNum) / 10)
					}
				})
			},
			onReachBottom() {
				var _that = this
				let nowType = this.tagList[this.current].name
				_that.getFilmTypeCount(nowType)
				let url = _that.url
				let nowPage = _that.nowPage
				let totalPage = _that.totalPage
				if (nowPage >= totalPage) {} else {
					_that.nowPage = nowPage + 1
					nowPage === totalPage ? _that.getFilmData(url, nowType, _that.totalPage) : _that.getFilmData(url, nowType, nowPage +
						1)
				}
			}
		},
	}
</script>

<style scoped>
	/* pages/filmData/index.wxss */
	.pulldown {
		text-align: center;
		height: 40rpx;
		line-height: 40rpx;
		width: 750rpx;
		display: block;
	}

	.loading {
		width: 750rpx;
		height: 100%;
	}

	u-loading {
		position: absolute;
		top: 45%;
		left: 45%;
		transform: translate(-50%-50%);
	}

	.public image {
		width: 300rpx;
		height: 500rpx;
		padding: 5rpx;
	}

	.public .imgFather {
		margin: 5rpx 16rpx;
		font-size: 14px;
		overflow: hidden;
		position: relative;
		background: #fff;
		border: 1rpx solid #dddee1;
		border-radius: 5px;
	}

	.public .title {
		position: absolute;
		left: 320rpx;
		font-size: 32rpx;
		color: #1AAD19;
	}

	.imgFather text {
		position: absolute;
		left: 320rpx;
		padding: 2rpx 0;
		display: inline-block;
		overflow: hidden;
	}

	.imgFather .rate {
		top: 50rpx
	}

	.imgFather .rates {
		position: absolute;
		top: 50rpx;
		left: 390rpx;
	}

	.imgFather .rates_text {
		position: absolute;
		display: inline-block;
		width: 85rpx;
		top: 50rpx;
		left: 590rpx;
		;
	}

	.imgFather .dri,
	.imgFather .dri_val {
		position: absolute;
		top: 95rpx;
	}

	.imgFather .dri_val {
		left: 390rpx;
	}

	.imgFather .bianju,
	.imgFather .bianju_val {
		top: 140rpx;
	}

	.imgFather .bianju_val {
		left: 390rpx;
		overflow: hidden;
	}

	.imgFather .zhuyan,
	.imgFather .zhuyan_val {
		top: 145rpx;
		overflow: hidden;
	}

	.imgFather .zhuyan_val1 {
		top: 195rpx;
		left: 390rpx;
	}

	.imgFather .zhuyan_val {
		left: 390rpx;
		overflow: hidden;
	}

	.imgFather .country,
	.imgFather .country_val {
		top: 240rpx;
	}

	.imgFather .country_val {
		left: 390rpx;
	}

	.imgFather .lang,
	.imgFather .lang_val {
		top: 290rpx;
	}

	.imgFather .lang_val {
		left: 390rpx;
	}

	.imgFather .date,
	.imgFather .date_val {
		top: 340rpx;
	}

	.imgFather .date_val {
		left: 450rpx;
		overflow: hidden;
	}

	.imgFather .length,
	.imgFather .length_val {
		top: 390rpx;
	}

	.imgFather .length_val {
		left: 390rpx;
	}

	.imgFather .leij,
	.imgFather .leij_val {
		position: absolute;
		top: 440rpx;
	}

	.imgFather .leij_val {
		font-family: 'stonefont' !important;
		src: url('http://p1.meituan.net/colorstone/e45adbaf43b01cc539986e542eaa3f173444.eot');
		left: 450rpx;
	}
</style>
