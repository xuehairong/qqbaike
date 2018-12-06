<template>
  <div id="app">
    <div id="banner">
            <!-- <input class="btn" type="button" value="搜疾病/症状/文章"> -->
            <div class="search">
                <div class="btn"><span>搜疾病/症状/文章</span>
                </div>

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
                <div class="depart-item">
                    <img src="../src/images/Department01.png">
                    <p>心血管内科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department02.png">
                    <p>呼吸内科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department03.png">
                    <p>口腔科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department04.png">
                    <p>产科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department05.png">
                    <p>眼科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department06.png">
                    <p>皮肤性病科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department07.png">
                    <p>儿科</p>
                </div>
                <div class="depart-item">
                    <img src="../src/images/Department08.png">
                    <p>内科</p>
                </div>
            </nav>
            <div class="more">
                全部疾病
            </div>
        </div>
        <div id="videos">
            <div class="videos-list">
                <div class="videos-item">
                    <img src="../src/images/video01.jpg">
                    <p class="title">艾滋病早就和你想的不一样了</p>
                    <p class="name"><span class="tag">艾滋病</span></p>
                </div>
                <div class="videos-item">
                    <img src="../src/images/video01.jpg">
                    <p class="title">艾滋病早就和你想的不一样了</p>
                    <p class="name"><span class="author">汪宁</span><span class="tag">艾滋病</span></p>
                </div>
                <div class="videos-item">
                    <img src="../src/images/video01.jpg">
                    <p class="title">艾滋病早就和你想的不一样了</p>
                    <p class="name"><span class="author">汪宁</span><span class="tag">艾滋病</span></p>
                </div>
                <div class="videos-item">
                    <img src="../src/images/video01.jpg">
                    <p class="title">艾滋病早就和你想的不一样了</p>
                    <p class="name"><span class="author">汪宁</span><span class="tag">艾滋病</span></p>
                </div>
            </div>
            <div class="more">
                更多视频
            </div>
        </div>
        <div id="articles">
            <nav>
                <!-- <ul>
                    <li class="selected">热门问答</li>
                    <li>前沿进展</li>
                    <li>医典精选</li>
                </ul> -->
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
