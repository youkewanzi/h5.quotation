<template>
	<div class="page-container">
		<div class="content-container" ref="content">
			<div class="content-wrap">
				<div class="company common-wrap">
					<div class="item">
						<div class="logo" @click="handleLogo"><img :src="staticSrc(info.company_logo)" alt="logo" /></div>
						<div class="value">
							<div class="name zh"><van-field type="text" v-model="info.company_name_zh" placeholder="请输入公司名称" /></div>
							<div class="name cn"><van-field type="text" v-model="info.company_name_cn" placeholder="请输入公司英文名称" /></div>
						</div>
					</div>
					<div class="item">
						<div class="title"><img class="icon" src="@/assets/image/address.png" alt="address"></div>
						<div class="value"><van-field type="text" v-model="info.company_address" placeholder="请输入公司地址/Address" /></div>
					</div>
					<div class="item">
						<div class="title"><img class="icon" src="@/assets/image/mail.png" alt="mail"><span class="tit">致/TO：</span></div>
						<div class="value"><van-field type="text" v-model="info.to" placeholder="请输入致/TO" /></div>
					</div>
					<div class="item">
						<div class="title"><img class="icon" src="@/assets/image/date.png" alt="date"><span class="tit">时间/Date：</span></div>
						<div class="value">
                            <span @click="showToDate = true">{{formatDate(info.to_date)}}</span>
                            <van-calendar v-model="showToDate" :show-confirm="false" @select="handleToDate" color="#007BFF" />
                        </div>
					</div>
					<div class="item">
						<div class="title"><img class="icon" src="@/assets/image/from.png" alt="from"><span class="tit">自/From：</span></div>
						<div class="value"><van-field type="text" v-model="info.from" placeholder="请输入自/From" /></div>
					</div>
					<div class="item">
						<div class="title"><img class="icon" src="@/assets/image/wechat.png" alt="phone"><span class="tit">电话/微信：</span></div>
						<div class="value"><van-field type="text" v-model="info.phone" placeholder="请输入电话/微信" /></div>
					</div>
				</div>
				<div class="price list-item common-wrap" v-for="(item, index) in list" :key="index">
                    <div class="title">{{item.startPort}}<img src="@/assets/image/arrow.png" mode="widthFix" class="arrow" />{{item.endPort}}</div>
                    <div class="name">
                        <img :src="staticSrc(item.company.logo)" mode="widthFix" class="logo" />
                        <span>{{item.company.english_name}}</span>
                    </div>
                    <div class="content">
                        <table>
                            <tr>
                                <th>箱型</th>
                                <th>单价</th>
                                <th>数量</th>
                                <th>货重(KGS)</th>
                                <th>重柜</th>
                            </tr>
                            <tr>
                                <td>20GP</td>
                                <td><van-field type="number" v-model="item.gp20" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.gp20_count" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.gp20_weight" /></td>
								<td><van-switch v-model="item.gp20_is_w" active-value="1" inactive-value="0" size="24px" /></td>
                            </tr>
                            <tr>
                                <td>40GP</td>
                                <td><van-field type="number" v-model="item.gp40" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.gp40_count" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.gp40_weight" /></td>
								<td><van-switch v-model="item.gp40_is_w" active-value="1" inactive-value="0" size="24px" /></td>
                            </tr>
                            <tr>
                                <td>40HQ</td>
                                <td><van-field type="number" v-model="item.hq40" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.hq40_count" @input="calcTransPrice($event, index)" /></td>
                                <td><van-field type="number" v-model="item.hq40_weight" /></td>
								<td><van-switch v-model="item.hq40_is_w" active-value="1" inactive-value="0" size="24px" /></td>
                            </tr>
                            <tr>
                                <td>合计</td>
                                <td>USD</td>
                                <td colspan="3" class="total">{{item.usd}}</td>
                            </tr>
                        </table>
                    </div>
				</div>
			</div>
			<div class="remark common-wrap">
				<div class="title">备注/Remarks:</div>
				<div class="content">
					<div>1、以上报价只适用于普通货物(非危险品或其他特殊货物)</div>
					<div>2、付款方式: 票结、月结</div>
					<div>3、如阁下所计划装载货物为20'GP, 则须知以下关于货物重量条款: </div>
					<div>货物毛重(不包含集装箱重量) ≧ 18 tons: USD 150</div>
					<div>货物毛重(不包含集装箱重量) ≧ 21 tons: USD 250</div>
					<div class="tit">温馨提示：</div>
					<div>由于运价和舱位变动频繁，敬请关注运价的有效期限，以及在订舱前致电我司确认运价及舱位事宜，</div>
					<div>订舱时，请将运价及相关船公司和船期等资料在订舱单上注明，以便阁下货物如期出运。多谢支持。</div>
				</div>
			</div>
		</div>
		<div class="operate-wrap">
			<div class="operate">
				<div class="btn update"></div>
				<div class="btn capture" @click="handleCapture">生成报价单</div>
			</div>
		</div>
	</div>
</template>

<script>

import config from '../../build'
import Api from '../utils/request'
import { parseTime, toPromise } from '@/utils/index'
import wx from 'weixin-js-sdk'
import html2canvas from 'html2canvas'

export default {
	name: 'Quotation',
	data() {
		return {
			ids: '',
			token: '',
			configData: {},
            showToDate: false,
            info: {
                company_name_zh: '',
                company_name_cn: '',
                company_logo: '',
                company_address: '',
                to: '',
                to_date: ''
            },
            list: []
		}
	},
    created() {
        this.ids = this.$route.query.ids || ''
        this.token = this.$route.query.token || ''
		this.$store.commit('user/SET_TOKEN', this.token)
    },
    async mounted() {
		document.addEventListener('WeixinJSBridgeReady', function() {
			wx.miniProgram.getEnv(function(res) {  
				console.log('当前环境：' + JSON.stringify(res))
			})
		})
		this.initData()
		await this.getWxConfig()
    },
    methods: {
		async getWxConfig() {
			let res = await Api.wxConfig()
			this.configData = res.data
		},
		initWxConfig() {
			const data = this.configData
			return new Promise((resolve, reject) => {
				wx.config({
					debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appId, // 必填，唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名
					jsApiList: [
						'chooseImage',
						'downloadImage'
					]
				})
				wx.ready(res => {
					// 微信SDK准备就绪后执行的回调。
					resolve(wx, res)
				})
				wx.error(err => {
					reject(wx, err)
				})
			})
		},
		async handleLogo() {
			const that = this
			this.initWxConfig().then((wx, res) => {
				toPromise(wx.chooseImage, {
					count: 1
				}).then(res => {
					wx.uploadFile({
                        url: config.baseURL + '/upload',
                        header: {
                            'Token': that.token,
                            'content-type': 'multipart/form-data'
                        },
                        filePath: res.tempFilePaths[0],
                        name: 'company_logo',
                        success: (response) => {
                            let data = JSON.parse(response.data)
                            if(data.code == 1){
                                that.info.company_logo = data.data
                            }else{
                                this.$toast({
                                    title: data.message || '上传失败，请重新上传',
                                    icon: 'none'
                                })
                            }
                        }
                    })
					resolve(res)
				}).catch(err => {
					reject(err)
				})
			})
		},
		formatDate(date) {
			if(date){
				return parseTime(date)
			}else {
				return ''
			}
		},
		staticSrc(url){
			let fileUrl = require('@/assets/image/logo.png')
			if(url) {
				fileUrl = config.staticUrl + url
			}
			return fileUrl
		},
        handleToDate(value) {
            this.info.to_date = parseInt((new Date(value)).getTime() / 1000)
            this.showToDate = false
        },
		initData() {
			Api.getBatchInfo({
				complete_price_ids: this.ids
			}).then(res => {
				let data = res.data || []
                data.forEach(item => {
                    item.gp20_count = ''
                    item.gp20_weight = ''
                    item.gp20_is_w = 0
                    item.gp40_count = ''
                    item.gp40_weight = ''
                    item.gp40_is_w = 0
                    item.hq40_count = ''
                    item.hq40_weight = ''
                    item.hq40_is_w = 0
                    item.usd = 0.00
                })
                this.list = data
                this.info.to_date = parseInt(new Date().getTime())
			})
		},
        handleLog() {
            wx.miniProgram.navigateTo({
                url: '/pages/chuancang/baojia/log'
            })
        },
		// 附加费
		calcTransPrice(e, index) {
            let item = this.list[index]
            let gp20 = parseFloat(item.gp20) || 0
            let gp40 = parseFloat(item.gp40) || 0
            let hq40 = parseFloat(item.hq40) || 0
            let newTrans = 0
            if(gp20 || gp40 || hq40){
                newTrans = (parseFloat(item.gp20) || 0) * (Number(item.gp20_count) || 0) +
                            (parseFloat(item.gp40) || 0) * (Number(item.gp40_count) || 0) +
                            (parseFloat(item.hq40) || 0) * (Number(item.hq40_count) || 0)
            }
            this.list[index].usd = parseFloat(newTrans).toFixed(2)
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

<style lang="scss" scoped>
.page-container{
    padding-top: 0
}
</style>
