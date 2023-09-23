import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorize,
    getAuthUser,
    registerUser,
    resetPassword,
    logout,
    getSocialRedirectUrl,
    socialLogin,
    confirmEmail } from "../../api/auth";

export const register = createAsyncThunk('auth/register', async (data) => {
    const response = await registerUser(data);
    return response.data
})

export const login = createAsyncThunk(
    "auth/login",
    async ( data) => {

        const response = await authorize(data);
        return response.data
    }
);


export const resetPasswordSend = createAsyncThunk(
    "auth/resetPassword",
    async ( data) => {

        const response = await resetPassword(data);
        return response.data
    }
);




export const refreshUser = createAsyncThunk(
    "auth/auth_user",
    async () => {
        const response = await getAuthUser();
        return response.data
    }
);

export const sendSocialLogin = createAsyncThunk(
    "auth/socialLogin",
    async ( data) => {


        const response = await socialLogin(data);
        return response.data
    }
);

export const sendConfirmEmail = createAsyncThunk(
    "auth/confirmEmail",
    async ( data) => {


        const response = await confirmEmail(data);
        return response.data
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async ( data) => {


        const response = await logout();
        return response.data
    }
);

export const getSocialRedirectUrlSend = createAsyncThunk(
    "auth/getSocialLogin",
    async ( data) => {


        const response = await getSocialRedirectUrl(data);
        return response.data
    }
);

