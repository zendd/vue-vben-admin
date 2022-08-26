import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess, resultSuccess } from '../_util';

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 200; index++) {
    result.push({
      id: `${index + 1}`,
      appName: '@first',
      appNumber: index,
      'pjhs|30-500': 30,
      'zdhs|30-500': 30,
      'qps|10-100': 10,
      'dycs|10-1000': 31,
      'xtcgl|10-100': 4,
      'ywcgl|10-100': 8,
    });
  }
  return result;
})();

const demoDetail = (keyword) => {
  // const result = {
  //   list: [] as Recordable[],
  // };
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      title: `${keyword ?? ''}选项${index}`,
      key: `${index}`,
      description: `description of content${index + 1}`,
      chosen: Math.random() * 2 > 1,
    });
  }
  return result;
};
export default [
  {
    url: '/basic-api/app/table/getDemoList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
  {
    url: '/basic-api/app/table/getDemoDetail',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { keyword } = query;
      console.log(keyword);
      return resultSuccess(demoDetail(keyword));
    },
  },
] as MockMethod[];
