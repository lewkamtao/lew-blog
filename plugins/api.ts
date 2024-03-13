import { defineNuxtPlugin } from "#app";

let baseUrl = "https://app.tngeek.com/api_blog";

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
        get: (url: any, params: any) =>
          fetch(url, { method: "get", ...params }),
        put: (url: any, params: any) =>
          fetch(url, { method: "put", ...params }),
        post: (url: any, params: any) =>
          fetch(url, { method: "post", ...params }),
        delete: (url: any, params: any) =>
          fetch(url, { method: "delete", ...params }),
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
  let token: any = "";
  if (useCookie("token")?.value) {
    token = useCookie("token")?.value?.replace(/Bearer\+/, "Bearer ");
  }

  const key = options.method == "get" ? reqUrl : String(new Date().getTime());
  return new Promise((resolve, reject) => {
    useFetch(reqUrl, {
      key: key,
      ...options,
      mode: "cors",
      headers: {
        Authorization: token,
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
              `https://app.tngeek.com/sso/?redirectUrl=${redirectUrl}`
            );
          }
        }
      })
      .catch((err: any) => {
        reject(err);
      });
  });
};
