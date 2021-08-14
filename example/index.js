import Vue from 'vue';
import App from './App.vue';
import router from './router'
import WUI from '@/wui';
import '@/assets/style/base.less';
import '@/assets/style/markdown.less';

Vue.use(WUI);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
