<template>
    <div id="paper" class="articles-wrapper">
                <div class="articles-item">
                    <div class="content-detail">
                        <div class="info">
                            <p class="paper-title">“液体活检”能用来诊断甲状腺癌吗？</p>
                            <div class="tag-list">
                                <div class="tag">甲状腺癌诊断</div>
                                <div class="tag">液体活检</div>
                                <div class="tag">前沿进展</div>
                            </div>
                        </div>
                    </div>
                    <p class="author"><img :src="authorImgUrl">腾讯医典医学团队</p>
                </div>
            </div>
</template>
<script>
//import hot from '../../images/source_wicon.png'
export default {
    name: 'paper-list',
    data: () => ({
    hotImgUrl:require('../images/hot.png'),
    authorImgUrl:require('../images/source_wicon.png')
  }),
}
</script>