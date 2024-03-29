import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      topBg: string;
      mainPinterestContainer: string;
      boardPinterestContainer: string;
      titleFont: string;
      defaultFont: string;
      themeBtn: string;
      navbarHighlight: string;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
