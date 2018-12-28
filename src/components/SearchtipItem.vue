<template>
    <li v-html="tip"></li>
</template>
<style lang="stylus" scoped>
    li
        font-size .32rem
        padding .2rem 0
        &::before
            content ''
            width .36rem
            height .36rem
            background url(../images/search.png) no-repeat 50%/.36rem
            display inline-block
            margin 0 .2rem -.07rem 0
        .match  
            color #01a176
</style>


<script>
export default {
    name:'searchtip-item',
    props:['item','searchKey'],
    computed:{
        tip(){
            let itemStr=this.item
            // return this.searchKey
            if(!this.item||!this.searchKey||this.searchKey.length==0){
                return itemStr
            }
            var reg = new RegExp(this.searchKey,"g");
               
            itemStr=itemStr.replace(reg,`<span class='match'>${this.searchKey}</span>`)
            return itemStr
        }
    }
}
</script>

