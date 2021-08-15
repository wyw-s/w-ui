import Vue from 'vue';
import VueRouter from 'vue-router';

import navConfig from '@/router/nav.config.json';

const loadPage = function(path) {
    return () => import(`@/views/${path}.vue`);
};

const loadDocs = function(path) {
    return () => import(`@/docs/${path}.md`);
};

const registerRoute = (navConfig) => {
    let route = [];
    route.push({
        path: `/component`,
        redirect: `/component/installation`,
        component: () => import('@/pages/component.vue'),
        children: []
    });
    navConfig.forEach((nav) => {
        if (nav.href) return;
        if (nav.groups) {
            nav.groups.forEach(group => {
                group.list.forEach(nav => {
                    addRoute(nav);
                });
            });
        } else if (nav.children) {
            nav.children.forEach(nav => {
                addRoute(nav);
            });
        } else {
            addRoute(nav);
        }
    });
    function addRoute(page) {
        const component = loadDocs(page.path.slice(1));
        let child = {
            path: page.path.slice(1),
            meta: {
                title: page.title || page.name,
            },
            name: 'component-' + (page.title || page.name),
            component: component.default || component
        };

        route[0].children.push(child);
    }

    return route;
};

let routes = registerRoute(navConfig)

routes.unshift(
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: loadPage('home'),
    }
)

routes.push({
    path: '*',
    redirect: '/home'
});

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes
})
