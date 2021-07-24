import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT,
  LOAD_USER_SUCCESS,
  authActionType,
  REMOVE_ERROR,
  AUTH_ERROR,
  SET_ERROR,
  GOOGLE_LOGIN,
} from "./action";

interface User {
  email: string;
  _id: string;
  googleId?: string;
}

interface Error {
  msg: string;
  id: string;
}

interface State {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  errors: Error[];
}

const initialState: State = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  errors: [],
};

const authReducer = (state: State = initialState, action: authActionType): State => {
  const { type, payload, form } = action;
  switch (type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: form,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, isAuthenticated: true, token: payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, token: null, user: null };
    case SET_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        errors: [...state.errors, payload],
      };
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== payload),
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
