import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  authorize,
  getAuthUser,
  registerUser,
  resetPassword,
  logout,
  getSocialRedirectUrl,
  socialLogin,
  confirmEmail,
} from "../../api/auth";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://spilno-diy-back.itbox.com.ua",
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};

export const register = createAsyncThunk("auth/register", async (data) => {
  const response = await registerUser(data);
  return response.data;
});

export const login = createAsyncThunk("auth/login", async (data) => {
  const response = await authorize(data);

  setToken(response.data.token);

  return response.data;
});

export const resetPasswordSend = createAsyncThunk(
  "auth/resetPassword",
  async (data) => {
    const response = await resetPassword(data);
    return response.data;
  }
);

export const refreshUser = createAsyncThunk(
  "auth/auth_user",
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setToken(token);
    try {
      const resp = await instance.get("/api/v1/auth/me");
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

// export const refreshUser = createAsyncThunk("auth/auth_user", async () => {
//   const response = await getAuthUser();
//   return response.data;
// });

export const sendSocialLogin = createAsyncThunk(
  "auth/socialLogin",
  async (data) => {
    const response = await socialLogin(data);
    return response.data;
  }
);

export const sendConfirmEmail = createAsyncThunk(
  "auth/confirmEmail",
  async (data) => {
    const response = await confirmEmail(data);
    return response.data;
  }
);

export const logOut = createAsyncThunk("auth/logout", async (data) => {
  const response = await logout();
  return response.data;
});

export const getSocialRedirectUrlSend = createAsyncThunk(
  "auth/getSocialLogin",
  async (data) => {
    const response = await getSocialRedirectUrl(data);
    return response.data;
  }
);
