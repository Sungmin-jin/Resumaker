import {
  loadAllTemplatesType,
  LOAD_ALL_TEMPLATE_SUCCESS,
  INCREASE_TEMPLATE_INDEX,
} from "./actions";
import { Template } from "../../interfaces";

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

const allTemplatesReducer = (
  state: State = initialState,
  action: loadAllTemplatesType,
): State => {
  switch (action.type) {
    case LOAD_ALL_TEMPLATE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        available: action.payload.available,
      };
    case INCREASE_TEMPLATE_INDEX:
      return {
        ...state,
        index: state.index  + 1,
      };
    default:
      return state;
  }
};

export default allTemplatesReducer;
