<template>
    <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
        link: {type: String},
        activeColorText: {type: String, default: '#fff'},
        activeColorBg: {type: String, default: '#000'}
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) !== -1;
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColorText, background: this.activeColorBg} : {};
        }
    },
    methods: {
        itemClick(){
            this.$router.push(this.link)
        }
    }
}
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 100%;
        color: #FFE591;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .tab-bar-item img {
        width: 24px;
        margin-bottom:3px;
    }
</style>