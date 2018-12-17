<template>
<div class="wrapper">
    <div class="top"><span class="left-arrow"></span><span class="title">全部疾病</span> <span class="filter-btn">筛选</span></div>
    <div class="btn"><span>搜索</span></div>
    <div class="normal">
        <h1>常见疾病</h1>
        <div class="normal-list">
            <div class="normal-name">抑郁症</div>
            <div class="normal-name">艾滋病</div>
            <div class="normal-name">肺癌</div>
            <div class="normal-name">早泄</div>
            <div class="normal-name">痛风</div>
            <div class="normal-name">腰间盘突出症</div>
            <div class="normal-name">水痘</div>
            <div class="normal-name">诺如病毒感染</div>
            <div class="normal-name">肾结石</div>
        </div>
    </div>
    <div class="letter-list">
        <div class="letter-item">
            <div class="letter">#</div>
            <div class="name">1型糖尿病</div>
            <div class="name">2型糖尿病</div>
        </div>
        <div class="letter-item">
            <div class="letter">A</div>
            <div class="name">艾尔兹海默病</div>
            <div class="name">埃博拉病毒感染</div>
            <div class="name building">爱迪生氏病<span>建设中</span></div>
        </div>
    </div>
    <ul class="letter-bar">
        <li>#</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
    </ul>
</div>
</template>
<style scoped>
.wrapper{
    background: #FCFCFC;
    padding:0 .3rem;
}
.top{
    /* position: fixed;
    top:0; */
    position: relative;
    text-align: center;
    padding: .36rem 0;
}
.title{
    font-weight: bolder;
    font-size: .36rem;
}
.btn{
    text-align: center;
    background: #F4F5F6
}
.left-arrow{
    width:.36rem;
    height: .36rem;
    position:absolute;
    left:0;
    background: url(../images/left-arrow.png) no-repeat 50%/contain;
}
.filter-btn{
    position:absolute;
    right: 0.36rem;
    border:solid 1px #EBEDEE;
    color: #80888C;
    font-size: .26rem;
    font-weight: bolder;
    border-radius: 2rem;
    padding: 0 .15rem;
}
.filter-btn::before{
    width: .36rem;
    height: .36rem;
    background: url(../images/filter.png) no-repeat 50%/contain;
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
    name:"disease-list"
}
</script>


