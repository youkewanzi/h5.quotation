import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Quotation',
            meta: {title: '报价单'},
            component: () => import('@/views/quota/index')
        },
        {
            path: '/simple',
            name: 'Simple',
            meta: {title: '报价单'},
            component: () => import('@/views/quota/simple')
        },
        {
            path: '/share',
            name: 'Share',
            meta: {title: '分享邀请'},
            component: () => import('@/views/share/index')
        },
        {
            path: '/poster',
            name: 'Poster',
            meta: {title: '邀请好友'},
            component: () => import('@/views/share/poster')
        },
        {
            path: '/waybill',
            name: 'Waybill',
            meta: {title: '运单查询'},
            component: () => import('@/views/waybill/index')
        }
    ]
})
