import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
