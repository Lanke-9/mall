<template>
    <tab-bar v-if="$store.state.isShow">
        <tab-bar-item link="/home" active-color-text="#fff" active-color-bg="#000">
            <img slot="item-icon" src="../assets/img/tabbar/home.png" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/home_1.png" alt="">
            <span slot="item-text">活动首页</span>
        </tab-bar-item>
        <tab-bar-item link="/vote" active-color-text="#fff" active-color-bg="#000">
            <img slot="item-icon" src="../assets/img/tabbar/vote.png" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/vote_1.png" alt="">
            <span slot="item-text">活动投票</span>
        </tab-bar-item>
        <tab-bar-item link="/introduce" active-color-text="#fff" active-color-bg="#000">
            <img slot="item-icon" src="../assets/img/tabbar/introduce.png" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/introduce_1.png" alt="">
            <span slot="item-text">活动介绍</span>
        </tab-bar-item>
        <tab-bar-item link="/rank" active-color-text="#fff" active-color-bg="#000">
            <img slot="item-icon" src="../assets/img/tabbar/rank.png" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/rank_1.png" alt="">
            <span slot="item-text">活动排行</span>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
    name: "MainTabBar",
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>