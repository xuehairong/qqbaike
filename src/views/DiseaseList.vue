<template>
<div class="wrapper">
    <div id="all-tab" class="top">
        <span class="left-arrow" @click="$router.go(-1)"></span>
    <span class="title">全部疾病</span> 
    <span class="filter-btn" @click="ShowfilterPopup">筛选</span>
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
                <div v-for="disease in diseaseItems" class="letter-item" :name="disease.index">
                    <div class="letter">{{disease.index}}</div>
                    <div v-for="item in disease.content" :class="{name:true,building:item.status=='building'}">{{item.name}}</div>
                </div>
            </div>
            <div  @TouchStart="handleTouchStart">
            <ul class="letter-bar"  @click="handleTouchStart">
                <li v-for="disease in diseaseItems">{{disease.index}}</li>
            </ul>
            </div>
    </div>
    <mt-popup v-model="filterPopupVisible">
        <div class="filter">
            <div class="filter-title">疾病筛选<i class="i-close" @click="HidefilterPopup"></i></div>
            <div class="filter-wrapper">
                <div class="filterByName">按首字拼音</div>
                <ul class="filterByContent depart">
                    <li :class="{selected:search.content==='全部疾病'}" @click="Filter('letter','全部疾病')">全部疾病</li>
                </ul>
                <div class="filterByName">按部位</div>
                <ul class="filterByContent">
                    <li v-for="part in bodyPartList" :class="{selected:search.content===part}" @click="Filter('bodypart',part)">{{part}}</li>
                </ul>
                <div class="filterByName">按科室</div>
                <ul class="filterByContent depart">
                    <li v-for="depart in departList" :class="{selected:search.content===depart}"  @click="Filter('depart',depart)">{{depart}}</li>
                </ul>
            </div>
        </div>
    </mt-popup>
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
    top:1.18rem;
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
.letter-list{
    overflow: hidden;
}
.letter-item{
    margin-bottom: .8rem;
    font-weight: 700;
    overflow:auto;
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
.letter-bar .selected{
    background: #06BA8E;
    border-radius: 50%;
    color: white;
    width: .28rem;
    height: .28rem;
}
.i-close{
    background: url(../images/close.png) no-repeat 50%;
    width: .32rem;
    height: .32rem;
    position:absolute;
    top:.24rem;
    right: .24rem;
}
.filter{
    width: 6.7rem;
    border-radius: .12rem;
}
.filter-title{
    /* position: fixed; */
    text-align: center;
    font-weight: 700;
    padding: .5rem;
    font-size: .36rem;
    letter-spacing: 2px;
    
}
.filterByName{
    color: #06BA8E;
    font-weight: 700;
    font-size: .36rem;
    padding: .4rem 0 .32rem .44rem;
}
.filterByContent{
    background: #F9F9F9;
    font-size: .28rem;
    display:flex;
    flex-wrap: wrap;
    padding: .08rem 0 .08rem .44rem;
    position: relative;
}
.filterByContent li{
    width: .84rem;
    margin-right: .46rem;
    padding: .18rem 0
}
.filterByContent li.selected::after{
    content: "";
    position: absolute;
    width:.28rem;
    height: .28rem;
    background: url(../images/selected.png) no-repeat 50%;
    background-size: 100%;
    margin-left: .1rem;
    margin-top: .05rem;
}
.filterByContent.depart li{
    width: 1.6rem;
}
.filter-wrapper{
    height: 9.5rem;
    overflow: auto;
}
</style>
<script>
// import {mapGetters} from 'vuex'
export default {
    name:"disease-list",
    data(){
        return{
            diseaseList:this.$store.getters.fetchDiseaseList,
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
            bodyPartList:["头部","颈部","胸部","背部","腹部","腰部","会阴部","四肢","皮肤","骨骼","血液","精神","全身"],
            departList:['妇科','产科','儿科','泌尿外科','内分泌科','神经内科','精神心理科','呼吸内科','骨科','血液科','消化内科','心血管内科','急诊科','肛肠外科','皮肤性病科'],
            firstSection:null,//字母区域的第一个元素
            allSections:null,
            allTabHeight:0,
            currentLetter:null,
            filterPopupVisible:false,
            search:{type:null,content:null}
        }
    },
    computed:{
        // ...mapGetters({
        //     diseaseList:'fetchDiseaseList'
        // }),
        diseaseItems(){
            let diseaseItems=[];
            //按科室筛选
            if(this.search.type==='depart' &&this.search.content!==null){
                for(let item of this.diseaseList){
                    let newItem={}
                    newItem.index=item.index;
                    newItem.content=item.content.filter(c=>c.department===this.search.content)
                    if(newItem.content.length>0){
                        diseaseItems.push(newItem);
                    }
                }
                return diseaseItems
                //按身体部位筛选
            }else if(this.search.type==='bodypart'  &&this.search.content!==null){
                for(let item of this.diseaseList){
                    let newItem={}
                    newItem.index=item.index;
                    newItem.content=item.content.filter(c=>c.bodyPart===this.search.content)
                    if(newItem.content.length>0){
                        diseaseItems.push(newItem);
                    }
                }
                return diseaseItems
            }
            return this.diseaseList
        }
    },
    beforeMount(){
        this.loadItems()
    },
    mounted(){
        // window.scrollTo(0,0);
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
        loadItems(){
            this.$store.dispatch('FETCH_DISEASE_LIST').then(function(){
                this.diseaseList=this.$state.getters.fetchDiseaseList
            })
        },
        handleScroll (){
            let tab=document.getElementById('all-tab')
            var s = document.body.scrollTop || document.documentElement.scrollTop
            // console.log('当前高度:'+s);
            if(s>0) {
                tab.classList.add('fixed')
            } else {
                tab.classList.remove('fixed')
            }
            let letterTitle=document.querySelector('#letter-title');
            let firstSectionHeight=this.firstSection.getBoundingClientRect().top
            if(firstSectionHeight<this.allTabHeight){   
                //设置第一个字母            
                letterTitle.style.display='block';
                letterTitle.innerHTML=this.firstSection.firstElementChild.innerHTML;
                for(let i of this.allSections){
                    //循环遍历每滚动到一个字母就要改变显示内容
                    if(i.getBoundingClientRect().top<this.allTabHeight){
                        letterTitle.innerHTML=i.firstElementChild.innerHTML;
                        this.currentLetter=letterTitle.innerHTML;
                        this.handleBarSelcted()
                    }
                }
            }else{
                letterTitle.style.display='none';
                this.currentLetter=null;
                this.handleBarSelcted()
            }
        },
        handleBarSelcted(){
            //根据当前的字母，去设置右侧导航中的字母为选中样式
            let barItems= document.getElementsByClassName('letter-bar')[0].getElementsByTagName('li')
            for(let j of barItems){
                if(j.innerHTML===this.currentLetter){
                    j.classList.add('selected')
                }else{
                    j.classList.remove('selected')
                }
            }
        },
        handleBarClick(e){
            if(e.target.tagName!=='LI'){
                return;
            }
            this.scrollList(e.target.innerHTML);
        },
        handleTouchStart(e){
            if(e.target.tagName!=='LI'){
                return;
            }
            this.scrollList(e.target.innerHTML);
            window.addEventListener('touchmove', this.handleTouchMove);
            window.addEventListener('touchend', this.handleTouchEnd);
        },
        handleTouchMove(e){
            e.preventDefault();
            console.log(e.target.innerHTML);
            // this.scrollList(e.target.innerHTML)
        },
        handleTouchEnd() {
            window.removeEventListener('touchmove', this.handleTouchMove);
            window.removeEventListener('touchend', this.handleTouchEnd);
        },
        scrollList(text){
            if(!text){
                return;
            }
            this.currentLetter=text
            //获取需要定位到的dom
            let targetDom=this.$refs.diseaseContent.querySelector('[name="'+this.currentLetter+'"]');   
            //将页面滑动到需要定位的dom
            let height=this.allTabHeight;
            if(!document.getElementById('all-tab').classList.contains('fixed')){
                height=height*2;
            }
            document.body.scrollTop=document.documentElement.scrollTop=targetDom.offsetTop-height;
            this.handleScroll();
        },
        ShowfilterPopup(){
            this.filterPopupVisible=true;
        },
        HidefilterPopup(){
            this.filterPopupVisible=false;
        },
        Filter(type,name){
            this.filterPopupVisible=false;
            this.search.type=type;
            this.search.content=name;
        }
    }
}
</script>


