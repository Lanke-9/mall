<template>
    <div class="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>

        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in bannerList" :key="index">
                <img class="swiper-img" :src="image.image" />
            </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import { getHomeData } from "network/home";
import { Swipe, SwipeItem } from 'vant';
import Vue from 'vue';
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
    name: 'Home',
    data() {
        return {
            bannerList: [],
            recommendList: []
        }
    },
    components: {
        NavBar,
    },
    created() {
        getHomeData().then(res => {
            this.bannerList = res.data.banner.list;
            this.recommendList = res.data.recommend.list;
            // console.log(this.bannerList);
        })
    }
}
</script>

<style>
    .home-nav{
        background: var(--color-tint);
        color:#fff;
    }
    .swiper-img{
        width:100%;
    }
</style>
