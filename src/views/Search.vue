<template>
    <div class="wrapper">
        <div class="search-header">
            <div class="search-input-wrapper">
                <input id="txtSearch" v-model.trim="searchKey" @input="inputSearch" @keyup.enter="handlerSearch" type="text" class="search-bar" placeholder="搜疾病/症状/文章">
                <i v-show="isDisplaySearchTip" @click="cleanSearch" class="clean"></i>
            </div>   
            <span v-show="!isDisplaySearchTip" class="cancel" @click="$router.go(-1)">取消</span>
            <span v-show="isDisplaySearchTip" class="ok">搜索</span>
        </div>
        <div v-show="!isDisplaySearchTip" class="search-hot">
            <p class="title">热门搜索</p>
            <div class="hot-list">
                <div class="hot-item" v-for="hot in hotSearchList">
                    <span class="hot-index">{{hot.index}}</span>
                    {{hot.content}}
                </div>
            </div>
        </div>
        <div v-show="historyList.length>0&&!isDisplaySearchTip" class="search-history">
            <p class="title">搜索历史<span class="clear" @click="DeleteHistoryAll">清除历史</span></p>
            <ul class="history-list">
                <li v-for="(item,index) in historyList" :key="index">{{item}}
                    <i class="cancel" @click="DeleteHistory(index)"></i>
                </li>
            </ul>
        </div>
        <div v-show="isDisplaySearchTip&&searchTips.length>0" class="search-tip">
            <!-- &&searchTips.length>0 -->
            <ul>
                <searchtip-item v-for="tip in searchTips" :item="tip" :searchKey="searchKey"></searchtip-item> 
                <!-- <li v-for="tip in searchTips">{{}}</li> -->
            </ul>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .search-header
        display flex
        flex 1
        line-height .6rem
        padding .2rem .26rem
        background #FFFFFF
        .search-input-wrapper
            width 90%
            background #F2F3F8 url(../images/search.png) no-repeat
            background-size .42rem
            background-position .24rem
            padding 0 .24rem 0 .74rem
            border-radius 1rem
            input 
                width 90%
                height .6rem
                font-size .28rem
                border 0
                background #F2F3F8
            .clean
                float right
                background url(../images/clean_input.png) no-repeat 50%/.32rem
                width .32rem
                height .32rem
                margin-top .13rem
        span 
            color #80888c
            font-size .28rem
            margin-left .26rem
            min-width .6rem
        .ok
            color #01A176

    .title
        font-size .28rem
        color #80888C
        padding .2rem .26rem
    .search-hot
        background #FFFFFF
        .hot-list
            display flex
            flex-wrap wrap
            padding .2rem .26rem .26rem .26rem
            .hot-item
                width 50%
                margin .22rem 0 
                font-size .34rem
                .hot-index
                    text-align center
                    font-size .28rem;
                    color:#adb3b7;
                    padding .05rem .12rem .02rem .12rem;
                    margin-right .1rem
                &:nth-child(1)
                    .hot-index
                        color: #fff;
                        background #fc4d4d;
                        border-radius 0.05rem;
                &:nth-child(2)
                    .hot-index
                        color: #fff;
                        background #FF6B17;
                        border-radius 0.05rem;
                &:nth-child(3)
                    .hot-index
                        color: #fff;
                        background #FFBC00;
                        border-radius 0.05rem;
    .search-history
        background #FFFFFF
        margin-top .2rem
        .clear
            float right  
            color #ADB3B7
            &::before
                content " "
                background url(../images/trash.png) no-repeat 50%
                background-size .26rem
                width .26rem;
                height .26rem;  
                display: inline-block
                margin-right .1rem
        .history-list
            padding .2rem .26rem .1rem .26rem
            li
                font-size .32rem
                color #303435
                padding .2rem 0
                &::before
                    content ""
                    background url(../images/clock.png) no-repeat
                    display: inline-block
                    background-size .33rem
                    width .33rem;
                    height .33rem; 
                    margin 0 0.3rem -0.04rem 0
                .cancel
                    float right
                    background url(../images/close.png) no-repeat 50%/.22rem
                    width .4rem
                    height .4rem
    .search-tip
        background #FFFFFF
        padding .2rem .26rem .26rem .26rem
            
</style>
<script>
import SearchtipItem from '../components/SearchtipItem.vue'
export default {
    components:{SearchtipItem},
    data:()=>({
        hotSearchList:[
            {index:1,content:'日常急救'},
            {index:2,content:'抑郁症'},
            {index:3,content:'艾滋病'},
            {index:4,content:'肺癌'},
            {index:5,content:'早泄'},
            {index:6,content:'痛风'},
        ],
        searchTips:["痛风","痛风的原因"],
        historyList:[],
        isDisplaySearchTip:false,
        searchTimer:null,//输入搜索下拉提示间隔定时
        searchKey:null
    }),
    methods:{
        DeleteHistoryAll(){
            this.historyList.splice(0,this.historyList.length)
        },
        DeleteHistory(index){
            this.historyList.splice(index,1)
        },
        inputSearch(){
            this.clearSearchTimer();
            if(this.searchKey&&this.searchKey.length>0){
                this.searchTimer=setTimeout(() => {
                    this.showTips() 
                }, 500);
            }else{
                this.showTips()
            }
            
        },
        showTips(){
            if(!this.searchKey){
                this.isDisplaySearchTip=false
                // this.searchTips=[]
                return
            }

            this.isDisplaySearchTip=true
            
        },
        handlerSearch(){
            this.historyList.push(this.searchKey)
        },
        cleanSearch(){
            this.isDisplaySearchTip=false
            this.searchKey=null
        },
        clearSearchTimer(){
            if(this.searchTimer){
                clearTimeout(this.searchTimer)
            }
        }
    }
}
</script>


