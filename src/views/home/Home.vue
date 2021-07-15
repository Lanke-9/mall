<template>
    <div class="home">
        <div>
            home

            <h4>{{$store.state.counter}}</h4>

            <button @click="add">+</button>
            <button @click="subtraction">-</button>
        </div>

        <router-link to="/home/news">消息</router-link>
        <router-link to="/home/msg">信息</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { INCREMENT, DECREMENT } from '../../store/mutations-types'
export default {
    name: 'Home',
    methods: {
        add(){
            // this.$store.commit(INCREMENT);
            this.$store.dispatch('aUpdateInfo')
        },
        subtraction(){
            this.$store.commit(DECREMENT);
            // this.$store.commit({
            //     type: 'increment'
            // });
        }
    },
    created() {
        this.$store.commit('hideTabBar')
    }
}
</script>
