<template>
    <div class="page-container waybill">
        <div v-show="!isPort && !isCompany">
            <div class="title">运单查询</div>
            <div class="content">
                <div class="item">
                    <div class="tit"><span>*</span>起运港</div>
                    <div class="value">
                        <van-field class="input-box" v-model="port.english_name" @click="handlePort" is-link readonly placeholder="请选择起运港" />
                    </div>
                </div>
                <div class="item">
                    <div class="tit"><span>*</span>船公司</div>
                    <div class="value">
                        <van-field class="input-box" v-model="company.chinese_name" @click="handleCompany" is-link readonly placeholder="请选择船公司" />
                    </div>
                </div>
                <div class="item">
                    <div class="tit"><span>*</span>单号类型</div>
                    <div class="value">
                        <van-radio-group v-model="type" direction="horizontal">
                            <van-radio :name="1" icon-size="16px">箱号</van-radio>
                            <van-radio :name="2" icon-size="16px">SO</van-radio>
                            <van-radio :name="3" icon-size="16px">SWB</van-radio>
                        </van-radio-group>
                    </div>
                </div>
                <div class="item">
                    <div class="tit"><span>*</span>单号</div>
                    <div class="value">
                        <van-field class="input-box" v-model="order_id" placeholder="请输入单号" />
                    </div>
                </div>
                <button class="btn-query" @click="handleQuery" v-preventReClick="3000">查询</button>
            </div>
        </div>
        <port v-show="isPort" @chooseItem="choosePort" @close="closePort"></port>
        <company v-show="isCompany" @chooseItem="chooseCompany" @close="closeCompany"></company>
    </div>
</template>

<script>
import Api from '../../utils/request'
import port from './port'
import company from './company'
export default {
	name: 'Waybill',
    components: { port, company },
	data() {
		return {
            isPort: false,
            isCompany: false,
            port: {
                id: '',
                english_name: ''
            },
            company: {
                id: '',
                chinese_name: ''
            },
            type: 1,
            order_id: '',
            user_id: ''
		}
	},
    created() {
        this.user_id = this.$route.query.user_id || ''
        if(!this.user_id){
            window.location.href = 'https://api.hangyunli.com/user/login2'
        }
    },
    methods: {
        handlePort() {
            this.isPort = true
        },
        choosePort(data) {
            this.port = data
            this.isPort = false
        },
        closePort() {
            this.isPort = false
        },
        handleCompany() {
            this.isCompany = true
        },
        chooseCompany(data) {
            this.company = data
            this.isCompany = false
        },
        closeCompany() {
            this.isCompany = false
        },
        handleQuery() {
            if(!this.port.id) {
                this.$toast('请选择起运港')
                return
            }else if(!this.company.id) {
                this.$toast('请选择船公司')
                return
            }else if(!this.order_id) {
                this.$toast('请输入单号')
                return
            }
            Api.queryOrder({
                start_port_id: this.port.id,
                ship_company_id: this.company.id,
                order_number: this.order_id,
                user_id: this.user_id
            }).then(res => {
                if(res.data){
                    window.location.href = res.data
                }
            }).catch(err =>{
                this.$toast(err)
            })
        }
    }
}
</script>