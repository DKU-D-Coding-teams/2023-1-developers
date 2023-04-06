import { atom } from "recoil";

export const scrollPosState = atom({
  key: "scrollPos",
  default: 0,
});

export const isDarkThemeState = atom({
  key: "isDarkTheme",
  default: false,
});

export const registerInfoStorage = {
  key: "registerInfo",
  init: {
    isDKU: false,
    email: "",
  },
};
