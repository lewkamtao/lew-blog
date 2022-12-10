export const toLogin = () => {
  var redirectUrl = window.location.href;
  window.location.replace(`https://sso.kamtao.com?redirectUrl=${redirectUrl}`);
};
