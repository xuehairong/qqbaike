<template>
    <div id="paper" class="articles-wrapper">
        <paper-item v-for="item in lists[type]" :key="item.id" :item="item"></paper-item>
            </div>
</template>
<script>
import PaperItem from '../components/PaperItem.vue'
export default {
    name: 'paper-list',
    components:{PaperItem},
    props:{
        type:String
    },
    data: () => ({
        lists:{
            paper:[{
         title:'“液体活检”能用来诊断甲状腺癌吗？',
         tagList:['甲状腺癌诊断','液体活检','前沿进展'],
         paperImgUrl:'',
         authorImgUrl:require('../images/source_wicon.png'),
         author:'腾讯医典医学团队',
         job:'',
         group:''
     }] ,
     handpick:[
         {
         title:'失眠睡不着？这才是最正确的解决方法！',
         tagList:['失眠','健康','医典精选'],
         paperImgUrl:require('../images/paper01.png'),
         authorImgUrl:require('../images/source_wicon.png'),
         author:'孙伟',
         job:'特约作者',
         group:'北京大学第六医院'}
     ]

        }
       
  }),
}
</script>