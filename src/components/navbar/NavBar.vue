<template>
    <div class="navbar">
        <div class="navbar-left"><slot name="left"></slot></div>
        <div class="navbar-center"><slot name="center"></slot></div>
        <div class="navbar-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
    .navbar{
        display:flex;
        height:44px;
        align-items:center;
        box-shadow: 0 1px 15px rgba(0,0,0,0.1);
    }
    .navbar-left, .navbar-right{
        width:60px;
    }
    .navbar-center{
        flex:1;
        text-align:center;
    }
</style>
