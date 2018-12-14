<template>
<div class="wrapper">
    <div class="top"><span class="left-arrow"></span><span class="title">全部疾病</span> <span class="filter-btn">筛选</span></div>
    <div class="btn"><span>搜索</span></div>
    <div class="normal">
        <div>常见疾病</div>
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
        <div class="letter-group">
            <div class="letter">A</div>
            <div class="name">艾尔兹海默病</div>
            <div class="name">埃博拉病毒感染</div>
        </div>
    </div>
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
</style>
<script>
export default {
    name:"disease-list"
}
</script>


