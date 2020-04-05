<template>
    <div style="padding-bottom:60px;">
        <img :src="detail.img" alt="" class="banner" v-if="typeof detail.img === 'string'" />
        <van-swipe :autoplay="3000" indicator-color="white" v-else>
            <van-swipe-item v-for="(item, index) in detail.img" :key="index">
                <van-image width="100%" fit="cover" :src="item" />
            </van-swipe-item>
        </van-swipe>


        <div class="info-warp">
            <p>{{ detail.name }}</p>
            <div>￥{{ detail.price }}</div>
        </div>

        <div class="go-back" @click="$router.back()">
            <van-icon name="arrow-left" size="16" color="#1989fa" style="position:relative;top:3px;" />  返回
        </div>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="tip" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="tip" />
            <van-goods-action-button type="warning" text="加入购物车" @click="tip" />
            <van-goods-action-button type="danger" text="立即购买" @click="buy" />
        </van-goods-action>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'detail',
        data() {
            return {
                arr: [],
                detail: {}
            }
        },
        mounted(){
            const id = Number(this.$route.query.id) - 1
            for (let i = 0; i < this.goodsData.length; i++) {
                this.arr = this.arr.concat(this.goodsData[i].data)
            }
            this.detail = this.arr[id]
        },
        computed: {
            ...mapState([
                'goodsData'
            ])
        },
        methods: {
            tip(){
                this.$notify({
                    type: 'success',
                    message: '马上开放，敬请期待！'
                })
            },
            buy(){
                this.$dialog.alert({
                    title: '提示',
                    message: '添加店主微信：dacui610，获取更多优惠哦！'
                }).then(() => {
                // on close
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        width 100%
        height auto
    .info-warp
        width 100%
        height auto
        background-color #fff
        overflow hidden
        border-bottom 1Px solid #dcdddd
        padding 0 24px
        box-sizing border-box
        p
            height 60px
            line-height 60px
            color #333
            font-weight 600
            font-size 36px
        div
            height 60px
            line-height 40px
            color #de335c
            font-weight 800
            font-size 40px
            overflow hidden
    .go-back
        width 200px
        height 60px
        line-height 60px
        color #1989fa
        font-size 14Px
        padding-left 26px
        box-sizing border-box
        cursor pointer
        position fixed
        left 0
        top 0
    /deep/ .van-swipe__track
        justify-content center
        align-items center
</style>