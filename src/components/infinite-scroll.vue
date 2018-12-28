<template>
    <div>
        <slot name="list"></slot>
        <div class="list-donetip" v-show="!isLoading&&isDone">
            <slot>没有更多数据了</slot>
        </div>
        <div class="list-loading" v-show="isLoading">
            <slot>加载中</slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isLoading:false,
            isDone:false
        }
    },
    props:{
        onInfinite:{
            type:Function,
            required:true
        },
        distance:{
            type:Number,
            default:100
        }
    },
    methods:{
        init(){
            this.$on
        }
    }
}
</script>
