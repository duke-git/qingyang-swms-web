import Main from '@/views/layout/Main.vue';
import Home from '@/views/home/Home.vue';
import ProjectPurchase from '@/views/components/ProjectPurchase.vue';
import ProjectUndertake from '@/views/components/ProjectUndertake.vue';

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
let routers = [
    {
        path: '/',
        name: 'root',
        redirect: '/home',
        component: Main,
        children: [
            //{ path: 'home', title: '首页', name: 'home', component: resolve => { require(['@/views/home/Home.vue'], resolve); } },
            { path: 'home', title: '首页', name: 'home', component: Home },
            // { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
            // { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '系统登录'
        },
        component: resolve => { require(['@/views/login/Login.vue'], resolve); }
    },
    {
        path: '/projectpurchase',
        icon: 'social-buffer',
        name: 'project',
        title: '项目购买',
        component: Main,
        children: [
            { path: 'purchase', title: '项目购买', name: 'ProjectPurchase', icon: 'arrow-move', component:  ProjectPurchase},
        ]
    },
    {
        path: '/projectundertake',
        icon: 'social-buffer',
        name: 'project',
        title: '项目承接',
        component: Main,
        children: [
            { path: 'undertake', title: '项目承接', name: 'ProjectUndertake', icon: 'arrow-move', component:  ProjectUndertake},
        ]
    }
];


export default routers;
