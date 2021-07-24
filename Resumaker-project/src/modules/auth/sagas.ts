import { all, delay, put, takeEvery } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";
import {
  LOGIN,
  REGISTER,
  GOOGLE_LOGIN,
  FACEBOOK_LOGIN,
  LOAD_USER,
  login,
  register,
  loadUser,
  loadUserAction,
  credentialError,
  authError,
  removeError,
  putError,
  CREDENTIAL_ERROR,
} from "./action";

import {
  loginRequest,
  registerRequest,
  googleLoginRequest,
  facebookLoginRequest,
  loadUserRequest,
} from "./apis";

interface Form {
  email: string;
  password: string;
}

interface Error {
  id: string;
  msg: string;
}

function* loginUser({ form }: { form: Form }) {
  try {
    const response = yield loginRequest(form);
    const { data } = response;
    yield put(login(data));
    yield put(loadUserAction());
  } catch (errors) {
    for (const error of errors.response.data.errors) {
      yield put(credentialError(error));
    }
  }
}

function* loginGoogleUser({ form }: { form: Form }) {
  try {
    const response = yield googleLoginRequest(form);
    const { data } = response;
    yield put(login(data));
  } catch (errors) {
    for (const error of errors.response.data.errors) {
      yield put(credentialError(error));
    }
  }
}

function* loginFacebookUser({ form }: { form: Form }) {
  try {
    const response = yield facebookLoginRequest(form);
    const { data } = response;
    yield put(login(data));
  } catch (errors) {
    for (const error of errors.response.data.errors) {
      yield put(credentialError(error));
    }
  }
}

function* registerUser({ form }: { form: Form }) {
  try {
    const response = yield registerRequest(form);
    const { data } = response;
    yield put(register(data));
    yield put(loadUserAction());
  } catch (errors) {
    for (const error of errors.response.data.errors) {
      yield put(credentialError(error));
    }
  }
}

function* fetchUser() {
  try {
    const response = yield loadUserRequest();
    const { data } = response;
    yield put(loadUser(data));
  } catch (error) {
    yield put(authError());
  }
}

function* setError({ error }: { error: Error }) {
  const id = uuidv4();
  error.id = id;
  yield put(putError(error));
  // yield delay(2000);
  yield put(removeError(id));
}

function* watchLoginUser() {
  yield takeEvery(LOGIN, loginUser);
}

function* watchRegisterUser() {
  yield takeEvery(REGISTER, registerUser);
}

function* watchGoogleLoginUser() {
  yield takeEvery(GOOGLE_LOGIN, loginGoogleUser);
}

function* watchFacebookRegisterUser() {
  yield takeEvery(FACEBOOK_LOGIN, loginFacebookUser);
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER, fetchUser);
}

function* watchError() {
  yield takeEvery(CREDENTIAL_ERROR, setError);
}

export function* authSaga() {
  yield all([
    watchLoginUser(),
    watchRegisterUser(),
    watchGoogleLoginUser(),
    watchFacebookRegisterUser(),
    watchLoadUser(),
    watchError(),
  ]);
}
