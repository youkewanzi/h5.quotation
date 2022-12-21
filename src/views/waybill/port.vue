<template>
    <div class="index-bar">
        <div class="top">
            <van-nav-bar title="起运港" left-text="返回" left-arrow @click-left="handleReturn" />
            <van-search v-model="keyword" :clearable="false" shape="round" background="linear-gradient(to right, #0075FF, #0DA4FF)" placeholder="请输入中文或英文" />
        </div>
        <van-index-bar :index-list="indexList">
            <div v-for="(list, key) in showList" :key="key">
                <van-index-anchor :index="key" />
                <van-cell class="item" v-for="item in list" :key="item.id" @click="handleClick(item)">
                    <span>{{item.english_name}}</span>
                    <span>{{item.chinese_name}}</span>
                </van-cell>
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Api from '../../utils/request'
export default {
    data() {
        return {
            keyword: '',
            datalist: [],
            port: {}
        }
    },
    computed:{
        indexList(){
            return Object.keys(this.showList)
        },
        showList(){
            if(this.keyword){
                let arr = {}
                Object.keys(this.datalist).forEach(key=>{
                    if(this.datalist[key].some(e=>{
                        return (e.chinese_name.includes(this.keyword) || e.english_name.includes(this.keyword))
                    })){
                        let cs = [];
                        this.datalist[key].forEach(e=>{
                            if(e.chinese_name.includes(this.keyword) || e.english_name.includes(this.keyword)){
                                cs.push(e)
                            }
                        })
                        arr[key] = cs
                    }
                })
                return arr
            }else{
                return this.datalist
            }
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        handleReturn() {
            this.$emit('close')
        },
        getList() {
            Api.portList().then(res => {
                this.datalist = res.data || []
            })
        },
        handleClick(item) {
            this.$emit('chooseItem', item)
        }
    }
}
</script>