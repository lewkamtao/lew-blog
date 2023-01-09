export const useBloggerInfo = () => {
  return useState("userInfo", () => { });
};


export const useMenuActive = () => {
  return useState("menuActive", () => "");
};


export const useSeriesActive = () => {
  return useState("seriesActive", () => 0);
};

