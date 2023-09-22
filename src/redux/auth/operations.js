import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const register = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      console.log("check register Operation");
      const resp = await instance.post("/api/v1/auth/register", credentials);

      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      console.log("check Login Operation");
      const resp = await instance.post("api/v1/auth/login", credentials);

      setToken(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.errors.email);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
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

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await instance.post("api/users/logout");
    setToken();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});
