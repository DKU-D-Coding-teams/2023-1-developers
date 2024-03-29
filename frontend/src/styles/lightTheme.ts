import { DefaultTheme } from "styled-components";

export const media = {
  mobile: "@media (max-width: 767px)",
  tablet: "@media (min-width: 768px) and (max-width: 1279px)",
  desktop: "@media (min-width: 1280px)",
};

const lightTheme: DefaultTheme = {
  colors: {
    bg: "white",
    topBg: "lightgray",
    mainPinterestContainer: "#e8f9ff",
    boardPinterestContainer: "#f2efae",
    titleFont: "black",
    defaultFont: "black",
    themeBtn: "#393939",
    navbarHighlight: "gray",
  },
  media,
};

export default lightTheme;
