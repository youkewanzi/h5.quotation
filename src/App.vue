<template>
	<div id="app">
		<router-view></router-view>
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
