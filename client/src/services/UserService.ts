import { AxiosResponse } from "axios";
import $api from "../http";
import { UserInterface } from "../types/response/UserI";

export default class UserServise {
  static fetchUsers(): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>("/users");
  }
}
