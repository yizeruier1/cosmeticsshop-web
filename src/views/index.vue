<template>
    <div style="width:100%;">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item @click="viewDetail(20)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/shui-ru/10.jpg" />
            </van-swipe-item>
            <van-swipe-item @click="viewDetail(28)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/xi-mian-nai/5.jpg" />
            </van-swipe-item>
            <van-swipe-item @click="viewDetail(32)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/yan-shuang/3.jpg" />
            </van-swipe-item>
            <van-swipe-item @click="viewDetail(3)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/fen-di-ye/3.jpg" />
            </van-swipe-item>
            <van-swipe-item @click="viewDetail(5)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/jing-hua/1.jpg" />
            </van-swipe-item>
            <van-swipe-item @click="viewDetail(36)">
                <van-image width="100%" height="200px" fit="cover" src="http://www.gostephen.cn/apis/nancy/kou-hong/8.jpg" />
            </van-swipe-item>
        </van-swipe>

        <div class="list-warp">
            <!-- 粉底液 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                粉底液
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[0].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="item.img" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>

            <!-- 精华 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                精华
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[1].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="item.img" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>

            <!-- 水乳 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                水乳
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[2].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="item.img" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>


            <!-- 洗面奶 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                洗面奶
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[3].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="item.img" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>

            <!-- 眼霜 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                眼霜
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[4].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="item.img" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>

            <!-- 口红 -->
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', fontSize: '16Px', marginBottom: '6Px' }">
                口红
            </van-divider>
            <van-grid :border="false" :column-num="2" :gutter="10">
                <van-grid-item v-for="item in goodsData[5].data" :key="item.id" @click="viewDetail(item.id)">
                    <van-image :src="typeof item.img === 'string' ? item.img : item.img[0]" />
                    <p>{{ item.name }}</p>
                    <div>￥{{ item.price }}</div>
                </van-grid-item>
            </van-grid>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'index',
        computed: {
            ...mapState([
                'goodsData'
            ])
        },
        methods: {
            viewDetail(id){
                this.$router.push('/detail?id=' + id)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .list-warp
        width 730px
        height auto
        margin 24px auto
        p
            width 100%
            text-align left
            height 60px
            line-height 60px
            font-size 30px
            color #010509
            font-weight 500
        div
            width 100%
            text-align left
            font-size 34px
            color #de335c
            font-weight 500
        /deep/ .van-grid-item__content
            padding-bottom 10px
            padding-top 10px
</style>