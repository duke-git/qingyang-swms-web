import Vue from 'vue';
import iView from 'iview';
import Util from '@/utils/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import routes from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    routes: routes
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (!Cookies.get('token') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
        next({
            name: 'login'
        });
    } else if (Cookies.get('token') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
        Util.title();
        next({
            name: 'home'
        });
    } else {
        Util.toDefaultPage([...routes], to.name, router, next);
    }
});

router.afterEach((to) => {
    Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;