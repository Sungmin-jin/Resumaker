import { takeEvery, put } from "redux-saga/effects";
import api from "../../util/api";
import { AxiosRequestConfig, AxiosResponse } from "axios";
const LOAD_API_KEYS = "api/LOAD_KEYS";
const SUCCESS_LOAD_API_KEYS = "api/SUCCESS_LOAD_KEYS";

interface Keys {
  aws_bucket_name: string | null;
  aws_bucket_region: string | null;
  aws_access_key: string | null;
  aws_secret_key: string | null;
  x_api_google: string | null;
  x_api_facebook: string | null;
}

export const loadKeys = () => ({
  type: LOAD_API_KEYS,
});

export const loadKeysSuccess = (keys: Keys) => ({
  type: SUCCESS_LOAD_API_KEYS,
  payload: keys,
});

const initialState: Keys = {
  aws_bucket_name: null,
  aws_bucket_region: null,
  aws_access_key: null,
  aws_secret_key: null,
  x_api_google: null,
  x_api_facebook: null,
};

interface Action {
  type: string;
  payload: Keys;
}

const fetchKeys = (): Promise<AxiosResponse<object>> => {
  return api.get("/key");
};

function* loadAPIKeys() {
  const response = yield fetchKeys();
  const {
    headers: {
      aws_bucket_name,
      aws_bucket_region,
      aws_access_key,
      aws_secret_key,
      x_api_google,
      x_api_facebook,
    },
  } = response;
  yield put(
    loadKeysSuccess({
      aws_bucket_name,
      aws_bucket_region,
      aws_access_key,
      aws_secret_key,
      x_api_google,
      x_api_facebook,
    })
  );
}

export function* apiSaga() {
  yield takeEvery(LOAD_API_KEYS, loadAPIKeys);
}

const APIRedcuer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SUCCESS_LOAD_API_KEYS:
      return payload;
    default:
      return state;
  }
};

export default APIRedcuer;
