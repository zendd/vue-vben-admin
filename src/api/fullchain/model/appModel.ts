import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface DemoListItem {
  id: string;
  appName: string;
  appNumber: number;
  pjhs: string;
  zdhs: string;
  qps: string;
  dycs: string;
  xtcgl: string;
  ywcgl: string;
}

/**
 * @description: Request list return value
 */
export type DemoListGetResultModel = BasicFetchResult<DemoListItem>;
