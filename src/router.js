import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Quotation',
            meta: {title: '报价单'},
            component: () => import('@/views/index')
        },
        {
            path: '/simple',
            name: 'Simple',
            meta: {title: '报价单'},
            component: () => import('@/views/simple')
        }
    ]
})
