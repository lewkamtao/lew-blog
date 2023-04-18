export const useBloggerInfo = () => {
  return useState("userInfo", () => {});
};

export const useMenuActive = () => {
  return useState("menuActive", () => "");
};

export const useSeriesActive = () => {
  return useState("seriesActive", () => 0);
};

export const useBlog = () => {
  return useState("blog", () => {
    return {
      seriesTotal: 0,
      articleTotal: 0,
    };
  });
};
