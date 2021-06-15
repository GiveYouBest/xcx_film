import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
Vue.use(uView)
Vue.config.productionTip = false
App.mpType = 'app'
uni.setStorageSync('isTrue', false)
//post 请求
const AxiosPost= function post(url,data) {
	let promise = new Promise((resolve,reject)=>{
		wx.request({
			url,
			data,
			method: 'POST',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
				 tooken:uni.getStorageSync('tooken')
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(e) {
				reject('网络出错')
			}
		})
	})
	return promise;
}
const AxiosGet = function get(url,data){
	let promise = new Promise((resolve,reject)=>{
		wx.request({
			url,
			data,
			method: 'GET',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded',
				 tooken:uni.getStorageSync('tooken')
			},
			success: function(res) {
				resolve(res)
			},
			fail: function(e) {
				reject('网络出错')
			}
		})
	})
	return promise;
}
Vue.prototype.AxiosPost=AxiosPost
Vue.prototype.AxiosGet=AxiosGet
const app = new Vue({
    ...App
})
app.$mount()
