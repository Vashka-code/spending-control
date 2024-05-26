import { UserInterface } from "./UserI";

export interface AuthResponseInterface {
  accessToken: string;
  refreshToken: string;
  user: UserInterface;
}
