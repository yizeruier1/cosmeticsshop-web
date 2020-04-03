// 按需引入 vant ui 组件
import Vue from 'vue'
import { Swipe, SwipeItem, Image, Grid, GridItem, GoodsAction, GoodsActionIcon, GoodsActionButton, Notify, Dialog, Icon, Divider, Tabbar, TabbarItem, Sidebar, SidebarItem, Cell, CellGroup } from 'vant'
[Swipe, SwipeItem, Image, Grid, GridItem, GoodsAction, GoodsActionIcon, GoodsActionButton, Notify, Dialog, Icon, Divider, Tabbar, TabbarItem, Sidebar, SidebarItem, Cell, CellGroup].forEach(item => {
    Vue.use(item)
})