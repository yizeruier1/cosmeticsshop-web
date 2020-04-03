<template>
    <div class="cate-warp">
        <div class="cates">
            <div style="position:fixed;left:0;top:0;width:85Px;min-height:calc(100vh - 50Px);">
                <van-sidebar v-model="activeKey" @change="switchCate">
                    <van-sidebar-item :title="item.categoryName" v-for="item in goodsData" :key="item.categoryNameId" />
                </van-sidebar>
            </div>
        </div>

        <div class="list">
            <div class="item" v-for="item in list.data" :key="item.id" @click="viewDetail(item.id)">
                <img :src="item.img" alt="" class="banner" />
                <p class="name">{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'category',
        data() {
            return {
                activeKey: 0,
                list: []
            }
        },
        computed: {
            ...mapState([
                'goodsData'
            ])
        },
        methods: {
            switchCate(idx){
                this.list = this.goodsData[idx]
            },
            viewDetail(id){
                this.$router.push('/detail?id=' + id)
            }
        },
        mounted(){
            this.list = this.goodsData[0]
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/styles/utils.styl'

    
    .cate-warp
        width 100%
        min-height calc(100vh - 50Px)
        background-color #fff
        overflow hidden
        .cates
            width 85Px
            min-height calc(100vh - 50Px)
            overflow hidden
            float left
        .list
            height auto
            overflow hidden
            .item
                width 25%
                height auto
                float left
                padding 16px
                box-sizing border-box
                .banner
                    display block
                    width 100%
                    height auto
                .name
                    width 100%
                    height 40px
                    line-height 40px
                    font-size 12Px
                    color #333
                    text-align center
                    textOverflow(1)
</style>