export const toLogin = () => {
  var redirectUrl = window.location.href;
  window.location.replace(`https://app.tngeek.com/sso?redirectUrl=${redirectUrl}`);
};
