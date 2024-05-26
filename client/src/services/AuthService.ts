import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponseInterface } from "../types/response/AuthResponce";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseInterface>> {
    return $api.post<AuthResponseInterface>("/login", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponseInterface>> {
    return $api.post<AuthResponseInterface>("/registration", {
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
