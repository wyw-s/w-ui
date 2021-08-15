import Vue from 'vue';
import App from './App.vue';
import router from './router'
import WUI from '@/wui';
import '@/assets/style/base.less';
import '@/assets/style/markdown.less';

import demoBlock from '@/pages/demo-block';

Vue.use(WUI);
Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
