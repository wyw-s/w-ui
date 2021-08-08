<template>
    <div id="app">
        <main-header></main-header>
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
