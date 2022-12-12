import { defineNuxtPlugin } from "#app";

let baseUrl = "http://localhost:3000";

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
        get: async (url, params?) =>
          await fetch(url, { method: "get", ...params }),
        put: async (url, params?) =>
          await fetch(url, { method: "put", ...params }),
        post: async (url, params?) =>
          await fetch(url, { method: "post", ...params }),
        delete: async (url, params?) =>
          await fetch(url, { method: "delete", ...params }),
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
  const token = useCookie("token");
  const key = options.method == "get" ? reqUrl : String(new Date().getTime());
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      key: key,
      ...options,
      headers: {
        Authorization: token.value.replace(/Bearer\+/, "Bearer "),
      },
    })
      .then(({ data, error }: any) => {
        if (error?.value) {
          throw new Error(error.value);
        } else {
          const res = data?.value as ResponseConfig;
          resolve(res);
          if (res?.code == 401) {
            var redirectUrl = window.location.href;
            window.location.replace(
              `https://sso.kamtao.com?redirectUrl=${redirectUrl}`
            );
          }
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
