import { defineNuxtPlugin } from "#app";

let baseUrl = "http://localhost:3000/api/blog/";

// 指定后端返回的基本数据类型
export interface ResponseConfig {
  code: number;
  data: any;
  message: string;
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: {
        get: (url, params?) => fetch(url, { method: "get", ...params }),
        put: (url, params?) => fetch(url, { method: "post", ...params }),
        post: (url, params?) => fetch(url, { method: "put", ...params }),
        delete: (url, params?) => fetch(url, { method: "delete", ...params }),
      },
    },
  };
});

// 指定后端返回的基本数据类型
export interface ResponseConfig {
  code: number;
  data: any;
  msg: string;
}

const fetch = (url: string, options?: any): Promise<any> => {
  const reqUrl = baseUrl + url;

  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      key: reqUrl,
      ...options,
    })
      .then(({ data, error }: any) => {
        if (error?.value) {
          throw new Error(error.value);
        } else {
          const res = data?.value as ResponseConfig;
          if (res?.code == 200) {
            resolve(res);
          } else {
            resolve(res);
          }
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
