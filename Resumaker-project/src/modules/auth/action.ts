//actions
export const LOGIN = "auth/LOGIN" as const;
export const REGISTER = "auth/REGISTER" as const;
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS" as const;
export const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS" as const;
export const GOOGLE_LOGIN = "auth/GOOGLE_LOGIN" as const;
export const FACEBOOK_LOGIN = "auth/FACEBOOK_LOGIN" as const;
export const LOGOUT = "auth/LOGOUT" as const;
export const CREDENTIAL_ERROR = "auth/CREDENTIAL_ERROR" as const;
export const LOAD_USER = "/auth/LOAD_USER" as const;
export const LOAD_USER_SUCCESS = "/auth/LOAD_USER_SUCCESS" as const;
export const REMOVE_ERROR = "/auth/REMOVE_ERROR" as const;
export const AUTH_ERROR = "/auth/AUTH_ERROR" as const;
export const SET_ERROR = "/auth/SET_ERROR" as const;

interface Token {
  token: string;
}

interface Form {
  email: string;
  password: string;
}

interface GoogleForm {
  email: string | undefined;
  googleId: string;
}

interface FacebookForm {
  email: string | undefined;
  facebookId: string;
}

interface User {
  email: string;
  _id: string;
}

interface Error {
  id: string;
  msg: string;
}

//action function
export const loginAction = (form: Form) => ({ type: LOGIN, form });
export const login = (token: Token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});
export const googleLoginAction = (form: GoogleForm) => ({
  type: GOOGLE_LOGIN,
  form,
});
export const facebookLoginAction = (form: FacebookForm) => ({
  type: FACEBOOK_LOGIN,
  form,
});

export const logout = () => ({
  type: LOGOUT,
});

export const registerAction = (form: Form) => ({ type: REGISTER, form });
export const register = (token: Token) => ({
  type: REGISTER_SUCCESS,
  payload: token,
});
export const loadUserAction = () => ({
  type: LOAD_USER,
});

export const loadUser = (user: User) => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
});

export const credentialError = (error: Error) => ({
  type: CREDENTIAL_ERROR,
  error,
});

export const putError = (error: Error) => ({
  type: SET_ERROR,
  payload: error,
});

export const removeError = (id: String) => ({
  type: REMOVE_ERROR,
  payload: id,
});

export const authError = () => ({
  type: AUTH_ERROR,
});

export type authActionType =
  | ReturnType<typeof login>
  | ReturnType<typeof googleLoginAction>
  | ReturnType<typeof register>
  | ReturnType<typeof logout>
  | ReturnType<typeof putError>
  | ReturnType<typeof loadUser>
  | ReturnType<typeof removeError>
  | ReturnType<typeof authError>;
