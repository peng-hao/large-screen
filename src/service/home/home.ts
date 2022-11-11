/*
 * @Author: chenph
 * @Date: 2022-08-29 15:50:34
 * @LastEditors: chenph
 * @LastEditTime: 2022-08-31 21:43:36
 * @Description:
 */
import { getRequest } from '../index';

interface IParams {
    [key: string]: any;
}

// 获取一级源
export const getPrimarySource = (params?: IParams) => getRequest('primarySource', params);

// 获取一级源对应二级源数据
export const getSecondary = (params: { primarySource: string }) => getRequest('secondaryData', params);

// 获取一级源污染物小计计chart
export const getPrimaryCount = (params: { primarySource: string }) => getRequest('primaryCount', params);
