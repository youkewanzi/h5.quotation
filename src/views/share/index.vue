<template>
    <div class="page-container share">
        <img src="@/assets/image/share/slogan.png" class="slogan" />
        <div class="btn-sort">天天可邀请，奖励无上限</div>
        <div class="red-envelope">
            <span class="cash">现金</span>
            <span class="value">10</span>
            <span class="unit">元</span>
            <div class="btn-sort sm" @click="handleInvite">立即邀请</div>
            <div class="tips">你的好友可获得50元整箱下单优惠券哦~</div>
        </div>
        <div class="step content-wrap">
            <div class="title">
                <span>如何赚10元</span>
            </div>
            <div class="content">
                <div class="item">
                    <img class="icon" src="@/assets/image/share/wechat.png" />
                    <span>分享小程序给好友</span>
                </div>
                <div class="item">
                    <img class="icon" src="@/assets/image/share/order.png" />
                    <span>好友提交整箱航运订单</span>
                </div>
                <div class="item">
                    <img class="icon" src="@/assets/image/share/reward.png" />
                    <span>您直接获得10元</span>
                </div>
            </div>
        </div>
        <div class="income content-wrap">
            <div class="title">
                <span>我的邀请收益</span>
            </div>
            <div class="content">
                <div class="item">
                    <div class="value">{{userInfo.inviter_count}}</div>
                    <span>已邀请好友</span>
                </div>
                <div class="item">
                    <div class="value">{{userInfo.inviter_balance}}</div>
                    <span>累计收益</span>
                </div>
            </div>
            <div class="btn-long" @click="handleWithdraw">提现</div>
        </div>
        <div class="record content-wrap">
            <div class="title">
                <span>邀请记录</span>
            </div>
            <div class="content" v-if="list.length > 0">
                <div class="item" v-for="(item, i) in list" :key="i">
                    <div class="user">
                        <div class="avatar"><img :src="item.inviter ? item.inviter.avatar_url : avatar" /></div>
                        <div class="name">{{item.inviter ? item.inviter.nickname : '微信用户'}}</div>
                    </div>
                    <div class="value">{{item.amount || 0}}元</div>
                </div>
            </div>
            <div style="text-align: center" v-else>暂无邀请记录</div>
            <div class="btn-long" @click="handleInvite">立即邀请</div>
        </div>
        <div class="share-mark" v-show="isShare" @click="isShare = false">
            <div class="modal">
                <img class="arrow" src="@/assets/image/share/arrow.png" />
                <div class="box">
                    点击上方<img src="@/assets/image/share/more.png" />更多按钮<br>邀请好友来参加活动吧
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Api from '../../utils/request'

export default {
    data() {
        return {
            isShare: false,
            token: '',
            userInfo: {
                inviter_count: 0,
                inviter_balance: 0.00
            },
            avatar: require('@/assets/image/avatar.png'),
            list: []
        }
    },
    created() {
        this.token = this.$route.query.token || ''
		this.$store.commit('user/SET_TOKEN', this.token)
    },
    mounted() {
        this.getUserInfo()
        this.getList()
    },
    methods: {
        getUserInfo() {
            Api.getUserInfo().then(res => {
				this.userInfo = res.data || {}
			})
        },
        getList() {
            Api.inviterRecord().then(res => {
				this.list = res.data || []
			})
        },
        handleWithdraw() {
            this.$toast('提现功能即将开通，请稍后几天')
        },
        handleInvite() {
            this.isShare = true
        }
    }
}
</script>