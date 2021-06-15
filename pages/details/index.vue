<template>
	<view class="container">
	  <video :src="url" type="video/mp4" show-fullscreen-btn='true' enable-auto-rotation='true'></video>
	  <view class="filmDesc">
	      <view class="desc">
	      {{desc}}
	      </view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				url:'',
				desc:''
			}
		},
		onLoad(options) {
			this.title=options.jsonStr,
			this.getfilmStr()
		},
		methods: {
			getfilmStr() {
			    var _that = this
				_that.AxiosPost('https://souljs.cn:5000/xcx/getFilmSrcAndDesc',{title:_that.title}).then((res)=>{
					if(res.status = 200) {
						_that.url=res.data.data[0]['filmVedio'],
						_that.desc=res.data.data[0]['film_desc']
					}
				})
			  },
		}
	}
</script>

<style scoped>
	#a {
	  box-sizing: border-box;
	  margin: 10rpx 2rpx;
	  width: 49%;
	  float: left;
	}
	video {
	  width: 100%;
	}
	.desc {
	  display: block;
	  text-indent: 1.5em;
	  width: 740rpx;
	  font-size: 35rpx;
	  margin: 5rpx;
	  box-sizing: border-box;
	  line-height: 1.5em;
	  color: #007AFF;
	}
</style>
