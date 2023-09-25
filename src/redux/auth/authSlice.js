import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logOut,
  refreshUser,
  register,
  sendConfirmEmail,
} from "./operations";
import { toast } from "react-toastify";
import storage from "../../services/storage";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  status: false,
};

const notify = (text) => toast(`${text}`);
const error = (text) => toast.error(`${text}`);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = true;
        state.isLoading = false;
        notify("Будь-ласка підтвердіть електронну пошту");
      })
      .addCase(register.rejected, (state, action) => {
        error(action.payload);
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.status = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;

        //прибрати
        storage.setToken(state.token);

        state.isLoggedIn = true;
        state.isLoading = false;
        state.status = false;
      })
      .addCase(login.rejected, (state, action) => {
        error(action.payload);
        state.isLoading = false;
        state.status = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.data;

        state.isLoggedIn = true;
        state.isRefreshing = false;

        storage.set("userData", JSON.stringify(state.user));
        storage.set("isLogged", state.isLoggedIn);
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;

        storage.removeItem("userData");
        storage.removeItem("isLogged");
      })

      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, avatarURL: null };
        state.isLoggedIn = false;
        state.token = null;
        state.isLoading = false;

        storage.removeToken();
        storage.removeItem("userData");
        storage.removeItem("isLogged");
      })
      .addCase(logOut.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoading = false;

        storage.removeToken();
        storage.removeItem("userData");
        storage.removeItem("isLogged");
      })
      .addCase(sendConfirmEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendConfirmEmail.fulfilled, (state, action) => {
        console.log(action.payload);

        state.token = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(sendConfirmEmail.rejected, (state, action) => {
        error(action.payload);
        state.isLoading = false;
      })
      .addDefaultCase((state, action) => {
        if (action.error) {
          if (action.payload === "Not authorized") {
            state.isLoggedIn = false;
            state.token = null;
          }
          state.error = action.payload;
          error(action.payload);
        }
      }),
});

export const authReducer = authSlice.reducer;
