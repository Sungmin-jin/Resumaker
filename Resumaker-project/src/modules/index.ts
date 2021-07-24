import { combineReducers } from "redux";
import appLayoutReducer from "./appLayout";
import { authSaga } from "./auth/sagas";
import authReducer from "./auth/";
import allTemplatesReducer from "./allTemplate/reducer";
import allTemplateSaga from "./allTemplate/sagas";
import templateSliderReducer from "./templateSlider";
import { all } from "redux-saga/effects";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dashboardReducer from "./dashboard/reducer";
import dashboardSaga from "./dashboard/sagas";
import templateReducer from "./template/reducer";
import APIRedcuer, { apiSaga } from "./api/reducer";
import { templateSaga } from "./template/saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "template"],
};

const rootReducer = combineReducers({
  appLayout: appLayoutReducer,
  templateSlider: templateSliderReducer,
  allTemplate: allTemplatesReducer,
  dashboard: dashboardReducer,
  auth: authReducer,
  template: templateReducer,
  api: APIRedcuer,
});

// 각자 만드신 사가는 이곳에 추가 시켜 주세요
export function* rootSaga() {
  yield all([
    allTemplateSaga(),
    dashboardSaga(),
    authSaga(),
    apiSaga(),
    templateSaga(),
  ]);
}

// useSelector 로 가져가시려고 할 때 이것을 참조 하시면 됩니다.
// @ts-ignore
export type RootReducerType = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
