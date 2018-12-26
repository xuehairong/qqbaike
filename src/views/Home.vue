<template>
<div class="wrapper">
    <div id="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in bannerList" :key="item"><img :src="item" alt=""></mt-swipe-item>
            </mt-swipe>
            <div class="search">
                <router-link to="/search" tag="div" class="btn"><span>搜疾病/症状/文章</span></router-link>
                <ul>
                    <li><span>日常急救</span></li>
                    <li><span>腰间盘突出症</span></li>
                    <li><span>抑郁症</span></li>
                </ul>

            </div>
      </div>
    <div id="Diseases">
            <nav>
                <div class="box tumour">
                    <p class="title">肿瘤篇</p>
                    <p class="content">早发现 预后好</p>
                </div>
                <div class="box vaccine">
                    <p class="title">疫苗</p>
                    <p class="content">早发现 预后好</p>
                </div>
                <div class="box video">
                    <p class="title">肿瘤篇</p>
                    <p class="content">早发现 预后好</p>
                </div>
            </nav>
            <nav class="depart-list">
                <div class="depart-item" v-for="item in departList" :key="item.name">
                    <img :src="item.img">
                    <p>{{item.name}}</p>
                </div>
            </nav>
            <router-link to="/allDiseases" tag="div" class="more">全部疾病</router-link>
        </div>
        <div id="videos">
            <div class="videos-list">
                <div class="videos-item" v-for="item in videoList" :key="item.id">
                    <img :src="item.img">
                    <p class="title">{{item.title}}</p>
                    <p class="name"><span class="author">{{item.author}}</span><span v-for="tag in item.tagList" :key="tag" class="tag">{{tag}}</span></p>
                </div>
            </div>
            <div class="more">
                更多视频
            </div>
        </div>
        <div id="articles">
            <nav id="tab-bar">
                <ul>
                <router-link to="/qa" tag="li" active-class="selected">热门问答</router-link>
                <router-link to="/paper" tag="li" active-class="selected">前沿进展</router-link>
                <router-link to="/handpick" tag="li" active-class="selected">医典精选</router-link>
                </ul>
                <div class="search"></div>
            </nav>
            <router-view></router-view>
        </div>
</div>
</template>
<style lang="stylus" scoped>
.wrapper
    background: #F7F7F7
</style>

<script>
export default {
    name:'home',
    data:()=>({
        bannerList:[require('../images/banner1.png'),require('../images/banner2.png')],
        departList:[
            {name:'心血管内科',img:require('../images/Department01.png')},
            {name:'呼吸内科',img:require('../images/Department02.png')},
            {name:'口腔科',img:require('../images/Department03.png')},
            {name:'产科',img:require('../images/Department04.png')},
            {name:'眼科',img:require('../images/Department05.png')},
            {name:'皮肤性病科',img:require('../images/Department06.png')},
            {name:'儿科',img:require('../images/Department07.png')},
            {name:'男科',img:require('../images/Department08.png')}
            ],
        videoList:[
            {id:1,title:'艾滋病早就和你想的不一样了',img:require('../images/video01.jpg'),author:'汪宁',tagList:['艾滋病']},
        ],
        fixBarHeight:null
    }),
    mounted(){
        window.scrollTo(0,0)
        this.fixBarHeight=document.getElementById('tab-bar').getBoundingClientRect().top;//初始化元素到视窗的高度
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(){
            let bar=document.getElementById('tab-bar');
            let s = document.body.scrollTop || document.documentElement.scrollTop//整个页面的滚动上方的高度
                if(s>this.fixBarHeight) {
                    bar.classList.add('fixed')
                } else {
                    bar.classList.remove('fixed')
                }
        }
    }
}
        
</script>

