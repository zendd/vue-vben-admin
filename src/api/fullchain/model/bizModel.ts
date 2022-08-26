import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface DemoListItem {
  id: string;
  beginTime: string;
  decs: string;
  sysName: string;
  appNumber: number;
  no: number;
}

/**
 * @description: Request list return value
 */
export type DemoListGetResultModel = BasicFetchResult<DemoListItem>;
