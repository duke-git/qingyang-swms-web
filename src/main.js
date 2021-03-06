import Vue from 'vue';
import iView from 'iview';
import App from './App';
import router from './router/index';
import routers from '@/router/router';
import store from './store';
import 'iview/dist/styles/iview.css';
import Util from '@/utils/util';
Vue.use(iView);

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
  data: {
      currentPageName: ''
  },
  mounted () {
      this.currentPageName = this.$route.name;
      // 显示打开的页面的列表
      this.$store.commit('setOpenedList');
      this.$store.commit('initCachepage');
  },
  created () {
      let tagsList = [];
      let menus = sessionStorage.getItem("menus");
      let appRouter = routers.filter(item => {
        return item.name != 'login' && item.name != 'root';
      });
      if(menus) {
        let menu = JSON.parse(menus);
        appRouter = appRouter.filter(item => {
            return menu.includes(item.path);
        });
      }
      appRouter.map((item) => {
          if (item.children && item.children.length <= 1) {
              tagsList.push(item.children[0]);
          } else {
              tagsList.push(...item.children);
          }
      });
      this.$store.commit('setTagsList', tagsList);
  }
});
