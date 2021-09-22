import { LOGIN, CHANGE_VALUE } from "../actions/user";

const initialState = {
  /* panier: [], */
  userName:'',
  password:'',
  userInfo: [],
  isConnected: false,
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isConnected: true,
      }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    default:
      return state;
  }
};

export default reducer;