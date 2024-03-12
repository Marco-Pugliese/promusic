import { SWITCH_SECTION } from "../Actions";

const initialState = {
  pageSelected: ["Home"],
};
const MainReducers = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_SECTION:
      return {
        ...state,
        pageSelected: [action.payload],
      };
    default:
      return state;
  }
};
export default MainReducers;
