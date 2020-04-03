<template>
    <div class="about-warp">
        <img src="@/assets/logo.jpg" class="logo" alt="">
        <h1>Nancy进口护肤品</h1>

        <van-cell-group>
            <van-cell title="实体店: 沙河市新兴路金家佳超市南侧" />
            <van-cell title="淘宝店: Nancy进口护肤品" />
            <van-cell title="微  信: dacui610" />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style lang="stylus" scoped>
    .about-warp
        width 100%
        min-height calc(100vh - 50Px)
        background-color #fff
        overflow hidden
        padding 0 30px
        box-sizing border-box
    .logo
        display block
        width 164px
        height 164px
        margin 150px auto 50px auto
        border-radius 50%
    h1
        font-size 18Px
        color #606266
        text-align center
        margin-bottom 80px
</style>