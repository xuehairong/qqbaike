<template>
    <div class="articles-item">
                    <p class="qa-title"><img :src="item.titleImgUrl">{{item.title}}</p>
                    <p class="author"><img :src="item.authorImgUrl">{{item.author}} {{item.job}} <span v-if="item.job!='' && item.group!=''">|</span> {{item.group}}</p>
                    <p class="qa-content">

                        {{item.content}}
                    </p>
                    <div class="tag-list">
                                <div class="tag" v-for="tag in item.tagList" :key="tag">{{tag}}</div>
                            </div>
                </div>
</template>
<script>
export default {
    name:'qa-items',
    props:['item'],
    // http://ssr.vuejs.org/en/caching.html#component-level-caching
//   serverCacheKey: ({ item: { id, __lastUpdated, time }}) => {
//     return `${id}::${__lastUpdated}::${timeAgo(time)}`
//   }
}
</script>

<style scoped>

</style>

