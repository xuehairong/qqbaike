<template>
<div class="wrapper">
    <div id="all-tab" class="top">
        <span class="left-arrow"></span>
    <span class="title">全部疾病</span> 
    <span class="filter-btn">筛选</span>
    </div>
    <div id="letter-title"></div>
    <div class="content">
        <div class="btn"><span>搜索</span></div>
            <div class="normal">
                <h1>常见疾病</h1>
                <div class="normal-list">
                    <div v-for="item in normalList" class="normal-name">{{item.name}}</div>
                </div>
            </div>
            <div class="letter-list" ref="diseaseContent">
                <div v-for="disease in diseaseList" class="letter-item">
                    <div class="letter">{{disease.index}}</div>
                    <div v-for="item in disease.content" :class="{name:true,building:item.status=='building'}">{{item.name}}</div>
                </div>
            </div>
            <ul class="letter-bar">
                <li v-for="disease in diseaseList">{{disease.index}}</li>
            </ul>
    </div>
    
</div>
</template>
<style scoped>
.wrapper{
    background: #FCFCFC;
}
.top{
    position: relative;
    text-align: center;
    padding: .36rem 0;
}
.top.fixed{
    position: fixed;
    top:0;
    left:0;
    right: 0;
    background: #ffff
}
.title{
    font-weight: bolder;
    font-size: .36rem;
}
#letter-title{
    display: none;
    position: fixed;
    background: #F3F3F3;
    color: #06BA8E;
    padding-left: .3rem;
    font-size: .24rem;
    width: 100%;
    opacity: .96;
    text-align: left;
}
.content{
    padding:0 .3rem;
}
.btn{
    text-align: center;
    background: #F4F5F6
}
.left-arrow{
    width:.36rem;
    height: .36rem;
    position:absolute;
    left:.3rem;
    background: url(../images/left-arrow.png) no-repeat 50%/contain;
}
.filter-btn{
    position:absolute;
    right: 0.36rem;
    border:solid 1px #EBEDEE;
    color: #80888C;
    font-size: .22rem;
    font-weight: bolder;
    border-radius: 2rem;
    padding: 0 .15rem 0 .41rem;
}
.filter-btn::before{
    content: '';
    width: .26rem;
    height: .26rem;
    background: url(../images/filter.png) no-repeat 50%/contain;
    position: absolute;
    left: 0.15rem;
    top:.02rem;
}
h1{
    font-size: .36rem;
    margin: .2rem 0;
}
.normal-list{
    display: flex;
    flex-wrap: wrap;
}
.normal-name{
    width:2.2rem;
    text-align: center;
    font-size: .28rem;
    color: #303435;
    background: #EEF1F2;
    padding: .15rem 0rem;
    margin: .1rem .1rem .1rem 0;
    border-radius: .1rem;
}
.letter-item{
    margin-bottom: .8rem;
    font-weight: 700;
}
.letter-item .letter{
    font-size: .28rem;
    color: #80888C;
    padding: .1rem 0;
}
.letter-item .name{
    font-size: .30rem;
    padding: .2rem 0;
}
.letter-item .building{
    color: #B8BFC9;
}
.letter-item .building span{
    float:right;
}
.letter-bar{
    position: fixed;
    right: 0.1rem;
    top:50%;
    color: #80888C;
    font-size: .28rem;
    text-align: center;
}
</style>
<script>
export default {
    name:"disease-list",
    data:()=>({
        normalList:[
            {name:'抑郁症'},
            {name:'艾滋病'},
            {name:'肺癌'},
            {name:'早泄'},
            {name:'痛风'},
            {name:'腰间盘突出症'},
            {name:'水痘'},
            {name:'诺如病毒感染'},
            {name:'肾结石'}
        ],
        diseaseList:[
            {index:'#',content:[
                {name:'1型糖尿病',department:'',bodyPart:'',status:'normal'},
                {name:'2型糖尿病',department:'',bodyPart:'',status:'normal'}
                ]},
            {index:'A',content:[
                {name:'艾尔兹海默病',department:'',bodyPart:'',status:'normal'},
                {name:'埃博拉病毒感染',department:'',bodyPart:'',status:'normal'},
                {name:'爱整形疼痛',department:'',bodyPart:'',status:'normal'},
                {name:'癌症',department:'',bodyPart:'',status:'normal'},
                {name:'艾滋病',department:'',bodyPart:'',status:'normal'},
                {name:'阿斯伯格综合征',department:'',bodyPart:'',status:'normal'},
                {name:'爱迪生氏病',department:'',bodyPart:'',status:'building'},
                {name:'矮小症',department:'',bodyPart:'',status:'building'}
            ]},
            {index:'B',content:[
                {name:'白癜风',department:'皮肤科',bodyPart:'全身',status:'normal'},
                {name:'白喉',department:'皮肤科',bodyPart:'',status:'normal'},
                {name:'白化病',department:'皮肤科',bodyPart:'',status:'normal'}
            ]} 
        ],
        firstSection:null,//字母区域的第一个元素
        allSections:null,
        allTabHeight:0
    }),
    mounted(){
        this.init()
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        init(){
            let listItems=this.$refs.diseaseContent.getElementsByClassName('letter-item')
            if(listItems.length>0){
                this.allSections=listItems;
                this.firstSection=listItems[0];
            }
            this.allTabHeight=document.getElementById('all-tab').clientHeight;
        },
        handleScroll (){
            let tab=document.getElementById('all-tab')
            var s = document.body.scrollTop || document.documentElement.scrollTop
            if(s>0) {
                tab.classList.add('fixed')
            } else {
                tab.classList.remove('fixed')
            }
            let letterTitle=document.querySelector('#letter-title');
            let firstSectionHeight=this.firstSection.getBoundingClientRect().top
            // console.log(s+this.allTabHeight)
            if(s-this.allTabHeight>firstSectionHeight){
                letterTitle.style.display='block';
                letterTitle.innerHTML=this.firstSection.firstElementChild.innerHTML;
                for(let i of this.allSections){
                    if(s-this.allTabHeight>i.getBoundingClientRect().top){
                        letterTitle.innerHTML=i.firstElementChild.innerHTML;
                    }
                }
            }else{
                letterTitle.style.display='none';
            }
        }
    }
}
</script>


