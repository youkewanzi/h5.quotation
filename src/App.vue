<template>
	<div id="app">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
                <!-- 这里是会被缓存的视图组件 -->
            </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
            <!-- 这里是不被缓存的视图组件 -->
        </router-view>
	</div>
</template>

<script>

import wx from 'weixin-js-sdk'
export default {
	name: 'App',
	mounted() {
		document.addEventListener('WeixinJSBridgeReady', function() {
			wx.miniProgram.getEnv(function(res) {  
				console.log('当前环境：' + JSON.stringify(res))
			})
		})
	},
}
</script>
