<template>
    <div id="app">
        <main-header></main-header>
        <main class="main">
            <router-view></router-view>
        </main>
        <main-footer></main-footer>
    </div>
</template>

<script>
import MainHeader from './components/header.vue';
import MainFooter from './components/footer.vue';
export default {
    components: {
        MainHeader,
        MainFooter
    }
}
</script>
<style lang="less" scoped>
#app {
    overflow-y: hidden;
    background: #eee;
    .main {
        box-sizing: border-box;
        width: 1140px;
        margin: 80px auto 20px;
        min-height: calc(100vh - 140px);
        background: #ffffff;
        border-radius: 8px;
        padding: 10px;
    }
}
</style>
