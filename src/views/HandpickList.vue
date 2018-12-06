<template>
   <div id="handpick" class="articles-wrapper">
                <div class="articles-item">
                    <div class="content-detail">
                        <div class="info">
                            <p class="paper-title">失眠睡不着？这才是最正确的解决方法！</p>
                            <div class="tag-list">
                                <div class="tag">失眠</div>
                                <div class="tag">健康</div>
                                <div class="tag">医典精选</div>
                            </div>
                        </div>
                        <div class="img">
                            <img :src="paperImgUrl">
                        </div>
                    </div>
                    <p class="author"><img :src="authorImgUrl">孙伟 特约作者 | 北京大学第六医院</p>
                </div>
            </div>
</template>
<script>
//import hot from '../../images/source_wicon.png'
export default {
    name: 'handpick-list',
    data: () => ({
    paperImgUrl:require('../images/paper01.png'),
    authorImgUrl:require('../images/source_wicon.png')
  }),
}
</script>