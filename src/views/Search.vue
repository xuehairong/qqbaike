<template>
    <div class="wrapper">
        <div class="search-header">
            <input type="text" class="search-bar" placeholder="搜疾病/症状/文章">
            <span>取消</span>
        </div>
        <div class="search-hot">
            <p class="title">热门搜索</p>
            <ul class="hot-list">
                <li class="hot-item" v-for="hot in hotSearchList">
                    <span class="hot-index">{{hot.index}}</span>
                    {{hot.content}}
                </li>
            </ul>
        </div>
        <div class="search-history">
            <p class="title">搜索历史<span>清除历史</span></p>
            <ul class="history-list">
                <li v-for="h in historyList">{{h}}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="stylus">
    .wrapper
        background #EEF1F2
    .search
        background #FFFFFF
    .history
        background #FFFFFF
</style>
<script>
export default {
    data:()=>({
        hotSearchList:[
            {index:1,content:'日常急救'},
            {index:2,content:'抑郁症'},
            {index:3,content:'艾滋病'},
            {index:4,content:'肺癌'},
            {index:5,content:'早泄'},
            {index:6,content:'痛风'},
        ],
        historyList:['高血压','感冒','肠胃炎']
    })
}
</script>


