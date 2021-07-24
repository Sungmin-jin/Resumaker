import {
  LOAD_DASHBOARD,
  loadDashboardFailure,
  loadDashboardSuccess,
  increaseDashboardIndex,
} from "./action";
import { takeEvery, all, put, select } from "redux-saga/effects";
import api from "../../util/api";

// const api = "https://www.heejaerica.online/api/mockData/dashboard";
// const api = "http://localhost:8081/api/mockData/dashboard";
const dashboardAPI = async (firstIndex: number, secondIndex: number) => {
  const data = await api.post(
    "/template/myTemplates",
    { firstIndex, secondIndex },
    { headers: { "Content-Type": "application/json" } }
  );
  if (data.data) {
    return {
      data: data.data,
      available: data.headers["x-custom-header"] === "keepGoing",
    };
  }
  throw new Error("no data");
};
function* loadDashboard(): any {
  const available: boolean = yield select((state) => state.dashboard.available);
  if (!available) {
    return 0;
  }

  try {
    const firstIndex: number = yield select((state) => state.dashboard.index);
    const secondIndex: number = firstIndex + 1;

    const result = yield dashboardAPI(firstIndex, secondIndex);

    yield put(increaseDashboardIndex());
    yield put(loadDashboardSuccess(result));
  } catch (error) {
    yield put(loadDashboardFailure(error.message));
  }
}
function* watchDashboard() {
  yield takeEvery(LOAD_DASHBOARD, loadDashboard);
}

export default function* dashboardSaga() {
  yield all([watchDashboard()]);
}
