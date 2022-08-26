import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const biz: AppRouteModule = {
  path: '/biz',
  name: 'BizDemo',
  component: LAYOUT,
  redirect: '/biz/list',
  meta: {
    orderNo: 2,
    icon: 'tabler:chart-dots',
    title: '业务系统',
  },
  children: [
    {
      path: 'biz-list',
      name: 'biz-list',
      component: () => import('/@/views/fullchain/biz/List.vue'),
      meta: {
        title: '业务列表',
      },
    },
  ],
};

export default biz;
