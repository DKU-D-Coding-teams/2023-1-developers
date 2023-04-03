import { atom } from "recoil";

export const scrollPosState = atom({
  key: "scrollPosState",
  default: 0,
});

export const isDarkThemeState = atom({
  key: "isDarkThemeState",
  default: false,
});

export const registerProcessState = atom({
  key: "registerProcessState",
  default: {
    isDKU: false,
    email: "",
  },
});
