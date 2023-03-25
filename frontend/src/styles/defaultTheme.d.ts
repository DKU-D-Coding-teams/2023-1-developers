import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      topBg: string;
      pinterestContainer: string;
      titleFont: string;
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
