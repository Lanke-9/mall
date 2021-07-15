<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBar"
}
</script>

<style scoped>
    .tab-bar {
        display: flex;
        height: 60px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #A71918;
        box-shadow: 0 -2px 10px rgba(167, 25, 24, 0.2);
        padding: 0 10px;
    }
</style>