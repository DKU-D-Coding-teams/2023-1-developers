import { atom } from "recoil";

export const scrollPosState = atom<number>({
  key: "scrollPosState",
  default: 0,
});

export const isDarkThemeState = atom<boolean>({
  key: "isDarkThemeState",
  default: false,
});
