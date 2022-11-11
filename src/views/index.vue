<template>
	<div class="page-container">
		<div class="tip">
			<img src="@/assets/image/tipc.png" class="icon" />
			<span class="text">报价单Logo会优先从历史记录中获取</span>
			<button class="btn-log" @click="handleLog">记录</button>
		</div>
		<div class="content-container" ref="content">
			<div class="content-wrap">
				<div class="company common-wrap">
					<div class="item">
						<van-uploader :after-read="afterRead" />
						<div class="logo" @click="handleLogo"><img :src="info.company_logo" alt="logo" /></div>
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
				<div class="ship common-wrap">
					<div class="tips">感谢您的询价，我们将会为您提供最优的运价解决方案和最优质的服务，根据您提供的货物信息，我司报价如下：</div>
					<div class="content">
						<table>
							<tr>
								<td>起运港/POL：</td>
								<td><van-field type="text" v-model="info.start_port" /></td>
							</tr>
							<tr>
								<td>目的港/POD：</td>
								<td><van-field type="text" v-model="info.end_port" /></td>
							</tr>
							<tr>
								<td>船公司：</td>
								<td><van-field type="text" v-model="info.ship_company" /></td>
							</tr>
							<tr>
								<td>船期：</td>
								<td>
									<template v-if="info.close_time">
										<span @click="showCloseTime = true">{{formatDate(info.close_time)}}</span>
									</template>
									<span @click="showCloseTime = true" v-else style="color: #999">点击选择日期</span>
									<van-calendar v-model="showCloseTime" :show-confirm="false" @select="handleCloseTime" color="#007BFF" />
								</td>
							</tr>
							<tr>
								<td>运价有限期：</td>
								<td>
									<template v-if="info.start_time && info.end_time">
										<span @click="showRangeTime = true">{{formatDate(info.start_time)}} ~ {{formatDate(info.end_time)}}</span>
									</template>
									<span @click="showRangeTime = true" v-else style="color: #999">点击选择日期</span>
									<van-calendar v-model="showRangeTime" type="range" :show-confirm="false" @select="handleRangeTime" color="#007BFF" />
								</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="price common-wrap">
					<div class="title">柜量/柜型</div>
					<div class="content">
						<table>
							<tr>
								<th>箱型</th>
								<th>数量</th>
								<th>货重(KGS)</th>
								<th>重柜</th>
							</tr>
							<tr>
								<td>20GP</td>
								<td><van-field type="number" v-model="info.gp20_count" @input="calcTransPrice" /></td>
								<td><van-field type="number" v-model="info.gp20_weight" /></td>
								<td><van-switch v-model="info.gp20_is_w" active-value="1" inactive-value="0" size="24px" /></td>
							</tr>
							<tr>
								<td>40GP</td>
								<td><van-field type="number" v-model="info.gp40_count" @input="calcTransPrice" /></td>
								<td><van-field type="number" v-model="info.gp40_weight" /></td>
								<td><van-switch v-model="info.gp40_is_w" active-value="1" inactive-value="0" size="24px" /></td>
							</tr>
							<tr>
								<td>40HQ</td>
								<td><van-field type="number" v-model="info.hq40_count" @input="calcTransPrice" /></td>
								<td><van-field type="number" v-model="info.hq40_weight" /></td>
								<td><van-switch v-model="info.hq40_is_w" active-value="1" inactive-value="0" size="24px" /></td>
							</tr>
						</table>
					</div>
				</div>
				<div class="price common-wrap">
					<div class="title">费用明细</div>
					<div class="content">
						<table>
							<tr>
								<th>收费项</th>
								<th>预付</th>
								<th>到付</th>
								<th>备注</th>
							</tr>
							<tr>
								<td><span class="query" @click="queryPrice('yunjia')">运费(O/F)</span></td>
								<td><van-field type="number" v-model="info.price_json.transPrice.sum" @input="calcTotal" /></td>
								<td><van-field type="number" v-model="info.price_json.transPrice.sum2" /></td>
								<td><van-field type="text" v-model="info.price_json.transPrice.remark" /></td>
							</tr>
							<tr v-for="(item, i) in info.price_json.portSurcharge || []" :key="i">
								<td>{{item.title}}</td>
								<td><van-field type="number" v-model="item.price" @input="calcSurcharge"/></td>
								<td><van-field type="number" v-model="item.price2" /></td>
								<td><van-field type="text" v-model="item.remark" /></td>
							</tr>
							<tr v-for="(item, i) in info.price_json.companySurcharge || []" :key="i+100">
								<td>{{item.title}}</td>
								<td><van-field type="number" v-model="item.price" @input="calcSurcharge"/></td>
								<td><van-field type="number" v-model="item.price2" /></td>
								<td><van-field type="text" v-model="item.remark" /></td>
							</tr>
							<tr>
								<td><span class="query" @click="queryPrice('tuoche')">拖车费</span></td>
								<td><van-field type="number" v-model="info.price_json.carPrice.sum" @input="calcTotal"/></td>
								<td><van-field type="number" v-model="info.price_json.carPrice.sum2" /></td>
								<td><van-field type="text" v-model="info.price_json.carPrice.remark" /></td>
							</tr>
							<tr>
								<td><span class="query" @click="queryPrice('baoguan')">报关费</span></td>
								<td><van-field type="number" v-model="info.price_json.customer_price.money" @input="calcTotal"/></td>
								<td><van-field type="number" v-model="info.price_json.customer_price.money2" /></td>
								<td><van-field type="text" v-model="info.price_json.customer_price.reamrk" /></td>
							</tr>
							<tr>
								<td><span>其它费</span></td>
								<td><van-field type="number" v-model="info.price_json.otherPrice.sum" @input="calcTotal"/></td>
								<td><van-field type="number" v-model="info.price_json.otherPrice.sum2" /></td>
								<td><van-field type="text" v-model="info.price_json.otherPrice.reamrk" /></td>
							</tr>
							<tr>
								<td rowspan="2" class="tit">合计</td>
								<td colspan="3" class="total">USD：{{info.usd || ''}}</td>
							</tr>
							<tr>
								<td colspan="3" class="total">CNY：{{info.cny || ''}}</td>
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
				<div class="btn update" @click="handleSave">更新</div>
				<div class="btn capture" @click="handleCapture">生成报价单</div>
			</div>
		</div>
	</div>
</template>

<script>

import wx from 'weixin-js-sdk'
import html2canvas from 'html2canvas'
import config from '../../build'
import Api from '../utils/request'
import { parseTime, base64toFile, imageUrlToBase64 } from '@/utils/index'

export default {
	name: 'Quotation',
	data() {
		return {
			id: '',
			token: '',
			active: '',
			configData: {},
			showToDate: false,
			showCloseTime: false,
			showRangeTime: false,
			info: {
				id: '',
				company_logo: require('@/assets/image/logo.png'),
				company_name_zh: '',
				company_name_cn: '',
				company_address: '',
				to: '',
				to_date: '',
				from: '',
				phone: '',
				start_port_id: '',
				start_port: '',
				end_port_id: '',
				end_port: '',
				ship_company: '',
				close_time: '',
				start_time: '',
				end_time: '',
				gp20: '',
				gp20_count: '',
				gp20_weight: '',
				gp20_is_w: 0,
				gp40: '',
				gp40_count: '',
				gp40_weight: '',
				gp40_is_w: 0,
				hq40: '',
				hq40_count: '',
				hq40_weight: '',
				hq40_is_w: 0,
				price_json: {
					// 运费
					transPrice: {
						sum: '',
						sum2: '',
						remark: ''
					},
					// 港口附加费
					portSurcharge: [],
					// 公司附加费
					companySurcharge: [],
					// 拖车费
					carPrice: {
						sum: '',
						sum2: '',
						remark: ''
					},
					// 报关费
					customer_price: {
						money: '',
						money2: '',
						remark: ''
					},
					// 其它费
					otherPrice: {
						sum: '',
						sum2: '',
						remark: ''
					}
				},
				usd: 0.00,
				cny: 0.00
			},
			usdSurcharge: 0, // usd附加费
			cnySurcharge: 0, // cny附加费
            defaultLogo: require('@/assets/image/logo.png')
		}
	},
    created() {
        this.id = this.$route.query.id || ''
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
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appId, // 必填，唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名
					jsApiList: [
						'chooseImage',
						'uploadImage',
						'getLocalImgData'
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
		afterRead(file) {
			const formData = new FormData()
			formData.append( 'image', file.file)
			Api.uploadFile(formData).then(response => {
				let imageData = response.data
				if(imageData){
					imageUrlToBase64(config.staticUrl + imageData).then(data => {
						this.info.company_logo = data
						this.$toast('h5上传成功')
					})
				}
			})
		},
		handleLogo() {
			const that = this
			that.initWxConfig().then((wx) => {
				wx.chooseImage({
					count: 1,
					success: res => {
						let localIds = res.localIds[0] // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
						that.$toast({ message: localIds, duration: 6000 })
						wx.getLocalImgData({
							localId: localIds, // 图片的localID
							success: (res) => {
								// localData是图片的base64数据
								that.$toast({ message: JSON.stringify(res.localData), duration: 6000 })
								let fileName = new Date().getTime()
								let file = base64toFile(res.localData, fileName)
								console.log(file)
								const formData = new FormData()
								formData.append('image', file)
								Api.uploadFile(formData).then(res => {
									let imageData = res.data
									if(imageData){
										imageUrlToBase64(config.staticUrl + imageData).then(data => {
											that.info.company_logo = data
											that.$toast('wx上传成功')
										})
									}
								})
							}
						})
					}
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
		initData() {
			Api.getInfo({
				id: this.id
			}).then(res => {
				let data = res.data
				if(data.company_logo){
					imageUrlToBase64(config.staticUrl + data.company_logo).then(res => {
						data.company_logo = res
					})
				}else{
					data.company_logo = this.defaultLogo
				}
				for (const key in data) {
					if (Object.hasOwnProperty.call(this.info, key)) {
						const element = data[key]
						if(key !== 'price_json' && element !== null){
							this.info[key] = element
						}
					}
				}
				if(data.price_json){
					for (const key in data['price_json']) {
						if (Object.hasOwnProperty.call(data['price_json'], key)) {
							const element = data['price_json'][key]
							if(key === 'transPrice' || key === 'carPrice' || key === 'customer_price' || key === 'otherPrice'){
								for (const cKey in element) {
									if (Object.hasOwnProperty.call(this.info['price_json'][key], cKey)) {
										this.info['price_json'][key][cKey] = element[cKey]
									}
								}
							}else if(element !== null){
								this.info['price_json'][key] = element
							}
						}
					}
					this.calcSurcharge()
				}

				if(!this.info.to_date){
					this.info.to_date = parseInt(new Date().getTime() / 1000)
				}
			})
		},
        handleToDate(value) {
            this.info.to_date = parseInt((new Date(value)).getTime() / 1000)
            this.showToDate = false
        },
        handleCloseTime(value) {
            this.info.close_time = parseInt((new Date(value)).getTime() / 1000)
            this.showCloseTime = false
        },
		handleRangeTime(value) {
			if(value[0] && value[1]){
				this.info.start_time = parseInt((new Date(value[0])).getTime() / 1000)
				this.info.end_time = parseInt((new Date(value[1])).getTime() / 1000)
				this.showRangeTime = false
			}
		},
        handleLog() {
            wx.miniProgram.navigateTo({
                url: '/pages/chuancang/baojia/log'
            })
        },
        queryPrice(value) {
			this.active = value
            if(value === 'yunjia' && this.info.start_port_id && this.info.end_port_id){
                wx.miniProgram.navigateTo({
                    url: '/pages/chuancang/dingcang/priceList?start_port_id=' + this.info.start_port_id + '&end_port_id=' + this.info.end_port_id
                })
            }else{
                wx.miniProgram.switchTab({
                    url: '/pages/chuancang/index/index'
                })
				wx.miniProgram.postMessage({ data: { active: value } })
            }
        },
		// 运费
		calcTransPrice() {
			let gp20 = parseFloat(this.info.gp20) || 0
			let gp40 = parseFloat(this.info.gp40) || 0
			let hq40 = parseFloat(this.info.hq40) || 0
			if(gp20 || gp40 || hq40){
				const newTrans = (parseFloat(this.info.gp20) || 0) * (Number(this.info.gp20_count) || 0) +
								(parseFloat(this.info.gp40) || 0) * (Number(this.info.gp40_count) || 0) +
								(parseFloat(this.info.hq40) || 0) * (Number(this.info.hq40_count) || 0)
				this.info.price_json.transPrice.sum = newTrans
				
				this.calcTotal()
			}
		},
		// 附加费
		calcSurcharge() {
			let usdPrice = 0
			let cnyPrice = 0
			this.info.price_json.portSurcharge.forEach(e => {
				if(e.unit === 'USD'){
					usdPrice += parseFloat(e.price) || 0
				}else if(e.unit === 'CNY'){
					cnyPrice += parseFloat(e.price) || 0
				}
			})
			this.info.price_json.companySurcharge.forEach(e => {
				if(e.unit === 'USD'){
					usdPrice += parseFloat(e.price) || 0
				}else if(e.unit === 'CNY'){
					cnyPrice += parseFloat(e.price) || 0
				}
			})
			this.usdSurcharge = usdPrice
			this.cnySurcharge = cnyPrice
			
			this.calcTotal()
		},
		// 合计
		calcTotal() {
			let cnyPrice = 0
			cnyPrice += parseFloat(this.info.price_json.carPrice.sum) || 0
			cnyPrice += parseFloat(this.info.price_json.customer_price.money) || 0
			cnyPrice += parseFloat(this.info.price_json.otherPrice.sum) || 0
			this.info.cny = cnyPrice + parseFloat(this.cnySurcharge)

			let transPrice = parseFloat(this.info.price_json.transPrice.sum) || 0
			this.info.usd = parseFloat(transPrice) + parseFloat(this.usdSurcharge)
		},
		handleSave() {
			Api.updateQuote(this.info).then(() => {
				this.handleLog()
			})
		},
		async handleCapture() {
			if(!this.info.id){
				this.$toast('请先更新报价单')
				return
			}
			await Api.updateQuote({
				id: this.info.id,
				status: 2
			})
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
