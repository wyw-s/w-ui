import router from 'vue-router';

const routers = [
    {
        path: '/',
        compontent: () => import('./App.vue')
    }
]