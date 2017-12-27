import Cookies from 'js-cookie';
import { loginByUsername } from '@/api/login';
import Util from '@/utils/util'

const user = {
    state: {
        user: '',
        token: Util.getToken()
    },
    mutations: {
        logout (state, vm) {
            Cookies.remove('token');
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '';
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
        }
    },
    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
          const username = userInfo.username.trim();
          return new Promise((resolve, reject) => {
            loginByUsername(username, userInfo.password).then(res => {
              const data = res.data;
              Util.setToken(data.token);
              resolve(data);
            }).catch(err => {
              reject(err);
            })
          })
        }
    }
};

export default user;
