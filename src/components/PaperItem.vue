<template>
    <div class="articles-item">
                    <div class="content-detail">
                        <div class="info">
                            <p class="paper-title">{{ item.title }}</p>
                            <div class="tag-list">
                                <div class="tag" v-for="tag in item.tagList" :key="tag">{{tag}}</div>
                            </div>
                        </div>
                        <div v-if="item.paperImgUrl!=''" class="img">
                            <img :src="item.paperImgUrl">
                        </div>
                    </div>
                    <p class="author"><img :src="item.authorImgUrl">{{item.author}} {{item.job}} <span v-if="item.job!='' && item.group!=''">|</span> {{item.group}}</p>
                </div>
</template>
<script>
export default {
    name:'paper-items',
    props:['item'],
    // http://ssr.vuejs.org/en/caching.html#component-level-caching
//   serverCacheKey: ({ item: { id, __lastUpdated, time }}) => {
//     return `${id}::${__lastUpdated}::${timeAgo(time)}`
//   }
}
</script>

<style scoped>
.articles-item .tag-list {
    display: flex;
    flex-wrap: wrap;
    font-size: .24rem;
}
.articles-item .paper-title {
    font-size: .34rem;
    margin-bottom: .2rem;
}
.articles-item .content-detail {
    display: flex;
}
.content-detail .img {
    margin-left: .14rem;
}

.content-detail .img img {
    width: 2.42rem;
    height: 1.56rem;
    border-radius: .08rem;
}
</style>

