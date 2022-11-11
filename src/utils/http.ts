import axios from 'axios';

const http = axios.create({
  // withCredentials: true, // 如跨域请求时要带上cookie,则设置为true
  timeout: 1000 * 5, // 请求超时时长5秒
});

http.interceptors.request.use(
  (config: any) => {
    if (config.method === 'get') {
      config.params = { ...config.params };
      // config.params = { token: '', ...config.params };
    }
    if (config.method === 'post') {
      /*
       * if (config.data.token) {
       *   console.log(config.data.token);
       * }
       */
      config.data = { ...config.data };
      // config.data = { token: '', ...config.data };
    }
    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: any) => {
    // 如果返回的状态不是200 就报错 按需修改
    if (response.status && response.status !== 200 && response.status !== 201) {
      return Promise.reject(new Error('错误'));
    }
    return response.data;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default http;
