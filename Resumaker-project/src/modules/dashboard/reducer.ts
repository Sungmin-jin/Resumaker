import { Template } from "../../interfaces";
import {
  loadDashboardType,
  LOAD_DASHBOARD_SUCCESS,
  INCREASE_DASHBOARD_INDEX,
  DELETETEMPLATESUCCESS,
  CLEARDASHBOARD,
} from "./action";

interface State {
  index: number;
  data: Array<Template>;
  available: boolean;
}
const initialState: State = {
  index: 0,
  data: [],
  available: true,
};

const dashboardReducer = (
  state: State = initialState,
  action: loadDashboardType
): State => {
  const { payload } = action;
  switch (action.type) {
    case LOAD_DASHBOARD_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        available: action.payload.available,
      };
    case INCREASE_DASHBOARD_INDEX:
      // 0 1, 1 2, 2 3, 3 4
      return { ...state, index: state.index + 1 };
    case DELETETEMPLATESUCCESS:
      return {
        ...state,
        data: state.data.filter(({ _id }) => _id !== payload),
      };
    case CLEARDASHBOARD:
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
