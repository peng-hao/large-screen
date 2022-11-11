import request from '@/utils/http';

const baseURL = 'http://localhost:8080/';

export const getRequest = (url: string, params?: any) => request({
  url: baseURL + url,
  method: 'get',
  params,
});

export const postRequest = (url: string, params?: any) => request({
  url: baseURL + url,
  method: 'post',
  params,
});
