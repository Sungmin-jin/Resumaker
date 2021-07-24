import {appLayoutActionType, SHOW_HEADER, HIDE_HEADER, SHOW_FOOTER, HIDE_FOOTER, LOAD_IMAGE} from "./actions";

interface State {
  header: boolean,
  footer: boolean,
  images: object,
}

const initialState = {
  header: true,
  footer: true,
  images: {}
};

const appLayoutReducer = (
  state: State = initialState,
  action: appLayoutActionType
): State => {
  switch (action.type) {
    case SHOW_HEADER:
      return {
        ...state,
        header: state.header = true
      };
    case HIDE_HEADER:
      return {
        ...state,
        header: state.header = false
      };
    case SHOW_FOOTER:
      return {
        ...state,
        footer: state.footer = true
      };
    case HIDE_FOOTER:
      return {
        ...state,
        footer: state.footer = false
      };
    case LOAD_IMAGE:
      return {
        ...state,
        images: state.images = action.payload,
      };

    default:
      return state;
  }
};

export default appLayoutReducer;
