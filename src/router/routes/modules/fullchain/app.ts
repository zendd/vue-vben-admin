import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const app: AppRouteModule = {
  path: '/app',
  name: 'AppDemo',
  component: LAYOUT,
  redirect: '/app/list',
  meta: {
    orderNo: 2,
    icon: 'ion:layers-outline',
    title: '应用管理',
  },
  children: [
    {
      path: 'app-list',
      name: 'app-list',
      component: () => import('/@/views/fullchain/app/List.vue'),
      meta: {
        title: '应用列表',
      },
    },
    {
      path: 'app-detail',
      name: 'app-detail',
      component: () => import('/@/views/fullchain/app/detail.vue'),
      meta: {
        title: '应用详情',
      },
    },
  ],
};

export default app;
