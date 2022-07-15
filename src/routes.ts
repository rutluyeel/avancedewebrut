import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "./constants";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/'

    },
    {
        path: '/',
        name: WebPages.HOME,
        components:{
            default: () => import("@/view/homeView.vue")
        }

    }

];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history'
} as any);


export default router;