import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexListAchat from '../views/IndexAchatList';
import Login from '../views/Login';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/list-achat',
            component: IndexListAchat,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/list-achat',
        }
    ],
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login')
    }
    next()
});

export default router;
