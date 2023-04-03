export interface RegisterParams {
  email: string;
  gender: "FEMALE" | "MALE";
  memberType: "DKU" | "GUEST";
  name: string;
  password: string;
}
