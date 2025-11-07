import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard.vue'

import home from '../pages/home.vue'
import profile from '../pages/profile.vue'
import setting from '../pages/setting.vue'
import message from '../pages/message.vue'
import download from '../pages/download.vue'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'home',
          path: '/home',
          component:home
        },
        {
          name: 'profile',
          path: '/profile',
          component:profile
        },
        {
          name: 'setting',
          path: '/setting',
          component:setting
        },
        {
          name: 'message',
          path: '/message',
          component:message
        },
        {
          name: 'download',
          path: '/download',
          component:download
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  