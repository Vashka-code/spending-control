import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { UserInterface } from "../types/response/UserI";
import axios from "axios";
import { AuthResponseInterface } from "../types/response/AuthResponce";
import { API_URL } from "../http";

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "user/login",
  async (loginCredentials: LoginCredentials, thunkAPI) => {
    try {
      const { email, password } = loginCredentials;
      const response = await AuthService.login(email, password);

      localStorage.setItem("token", response.data.accessToken);

      return response.data.user;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const registrarion = createAsyncThunk<
  UserInterface,
  LoginCredentials,
  {
    rejectValue: string;
  }
>("user/registrarion", async (loginCredentials: LoginCredentials, thunkAPI) => {
  try {
    const { email, password } = loginCredentials;
    const response = await AuthService.registration(email, password);

    localStorage.setItem("token", response.data.accessToken);

    return response.data.user;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(
      e.response?.data?.message || "An error occurred"
    );
  }
});

export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    await AuthService.logout();
    localStorage.removeItem("token");
  } catch (e: any) {
    return thunkAPI.rejectWithValue(
      e.response?.data?.message || "An error occurred"
    );
  }
});

export const checkAuth = createAsyncThunk(
  "user/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthResponseInterface>(
        `${API_URL}/refresh`,
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("token", response.data.accessToken);

      return response.data.user;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || "An error occurred"
      );
    }
  }
);
