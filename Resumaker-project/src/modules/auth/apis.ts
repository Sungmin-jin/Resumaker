import { AxiosRequestConfig, AxiosResponse } from "axios";
import api from "../../util/api";

interface Form {
  email: string;
  password: string;
}
interface GoogleForm {
  email: string;
  googleId: string;
}

interface FacebookForm {
  email: string;
  facebookId: string;
}

interface Token {
  token: string;
}

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const loginRequest = (body: Form): Promise<AxiosResponse<Token>> => {
  return api.post("/auth/signin", body, config);
};

export const registerRequest = (body: Form): Promise<AxiosResponse<Token>> => {
  return api.post("/auth/signup", body, config);
};

export const googleLoginRequest = (body: GoogleForm): Promise<AxiosResponse<Token>> => {
  return api.post("/auth/google", body, config);
};

export const facebookLoginRequest = (body: FacebookForm): Promise<AxiosResponse<Token>> => {
  return api.post("/auth/facebook", body, config);
};

export const loadUserRequest = (): Promise<AxiosResponse<any>> => {
  return api.get("/auth");
};
