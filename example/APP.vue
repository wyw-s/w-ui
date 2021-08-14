<template>
    <div id="app">
        <main-header></main-header>
        <main class="main">
            <router-view></router-view>
        </main>
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
