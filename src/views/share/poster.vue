<template>
    <div class="page-container poster">
        <div class="poster-wrap" ref="content">
            <div class="user">
                <div class="avatar"><img :src="avatar_url" /></div>
                <div class="value">
                    <div class="name">我是《{{nickname}}》</div>
                    <div class="tips">邀你免费领取 <span class="num">30</span><span>元</span> 整箱航运抵扣券</div>
                </div>
            </div>
            <div class="content">
                <div class="title">航运大脑&nbsp;&nbsp;价格最优</div>
                <div class="slogan">让您每一趟航程都是最优的价格</div>
                <div class="list">
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon01.png" />
                        <span class="orange">业内最优的整箱报价</span>
                    </div>
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon02.png" />
                        <span>最精准的船期信息</span>
                    </div>
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon03.png" />
                        <span>快捷、准确、全面的报关查询服务</span>
                    </div>
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon04.png" />
                        <span>最优惠的车行、拖车服务</span>
                    </div>
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon05.png" />
                        <span>快捷生成报价单、优化传统的工作模式</span>
                    </div>
                    <div class="item">
                        <img class="icon" src="@/assets/image/share/icon06.png" />
                        <span class="orange">免费获得直客名单，提升获客机会</span>
                    </div>
                </div>
                <div class="qrcode">
                    <img class="code" :src="qrcode" />
                    <div class="tips">
                        <div class="tit">微信扫一扫</div>
                        <div class="orange">即可获得 30元 整箱抵扣券。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="operate-bar">
            <div class="btn-save" @click="handleCapture">保存海报</div>
        </div>
    </div>
</template>

<script>

import wx from 'weixin-js-sdk'
import Api from '../../utils/request'
import html2canvas from 'html2canvas'
import config from '../../../build'
import { imageUrlToBase64 } from '@/utils/index'

export default {
    data() {
        return {
            avatar_url: '',
            nickname: '',
            qrcode: ''
        }
    },
    created() {
        this.token = this.$route.query.token || ''
		this.$store.commit('user/SET_TOKEN', this.token)
        this.nickname = this.$route.query.nickname || ''
        this.avatar_url = this.$route.query.avatar_url || ''
        if(this.avatar_url){
            imageUrlToBase64(config.staticUrl + this.avatar_url).then(res => {
                this.avatar_url = res
            })
        }
    },
    mounted() {
		document.addEventListener('WeixinJSBridgeReady', function() {
			wx.miniProgram.getEnv(function(res) {  
				console.log('当前环境：' + JSON.stringify(res))
			})
		})
        this.getUserInfo()
        this.getCode()
    },
    methods: {
        getUserInfo() {
            Api.getUserInfo().then(res => {
				let data = res.data || {}
                if(data.avatar_url){
                    imageUrlToBase64(data.avatar_url).then(res => {
                        this.avatar_url = res
                    })
                }
                this.nickname = data.nickname || ''
			})
        },
        getCode() {
            Api.getQrCode().then(res => {
                this.qrcode = res.data.qrcode || ''
			})
        },
		handleCapture() {
			const ref = this.$refs.content // 截图区域
			html2canvas(ref, {
				backgroundColor: '#f1f1f1',
				useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
			}).then((canvas) => {
				const dataURL = canvas.toDataURL('image/png')
				wx.miniProgram.postMessage({
					data: { imageData: dataURL}
				})
				wx.miniProgram.navigateBack({ delta: 1 })
				// const creatDom = document.createElement('a')
				// document.body.appendChild(creatDom)
				// creatDom.href = dataURL
				// creatDom.download = '图片'
				// creatDom.click()
			})
		}
    }
}
</script>