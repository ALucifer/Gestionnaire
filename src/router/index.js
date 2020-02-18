import Vue from 'vue';
import VueRouter from 'vue-router';
import Achats from '../views/Achats';
import AchatsIndex from '../views/Achats/Index';
import AchatsAdd from '../views/Achats/Add';
import Login from '../views/Login';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/list-achat',
            component: Achats,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'achatIndex',
                    components: {
                        children: AchatsIndex
                    }
                },
                {
                    path: 'new',
                    name: 'achatAdd',
                    components: {
                        children: AchatsAdd
                    }
                }
            ]
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
