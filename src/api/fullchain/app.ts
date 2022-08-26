import { defHttp } from '/@/utils/http/axios';
import { DemoParams, DemoListGetResultModel } from './model/bizModel';

enum Api {
  DEMO_LIST = '/app/table/getDemoList',
  DEMO_DETAIL = '/app/table/getDemoDetail',
}

/**
 * @description: Get sample list value
 */

export const demoListApi = (params: DemoParams) =>
  defHttp.get<DemoListGetResultModel>({
    url: Api.DEMO_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });

export const demoDetailApi = (params?: Recordable) =>
  defHttp.get<Recordable[]>({ url: Api.DEMO_DETAIL, params });
