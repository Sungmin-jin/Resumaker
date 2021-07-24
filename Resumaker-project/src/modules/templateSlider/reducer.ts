import { templateSliderActionType, LOAD_REMAINING_THUMBNAILS } from "./actions";

interface State {
  loadRemainingThumbnails: { [templateId: string]: boolean };
}

const initialState = {
  loadRemainingThumbnails: {},
};

const templateSliderReducer = (
  state: State = initialState,
  action: templateSliderActionType,
): State => {
  switch (action.type) {
    case LOAD_REMAINING_THUMBNAILS:
      return {
        ...state,
        loadRemainingThumbnails: {
          ...state.loadRemainingThumbnails,
          [action.payload]: true,
        },
      };
    default:
      return state;
  }
};

export default templateSliderReducer;
