<template>
    <div style="padding-bottom:44Px;">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />

        <van-tabbar
            route
            active-color="rgb(25, 137, 250)"
            inactive-color="#000"
        >
            <van-tabbar-item replace to="/index" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item replace to="/category" icon="bar-chart-o">分类</van-tabbar-item>
            <van-tabbar-item replace to="/about" icon="user-o">关于Nancy</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'layout'
    }
</script>
