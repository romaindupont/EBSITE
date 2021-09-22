/* import { SEND_ARTICLE_TO_BASKET } from "../actions/order"; */

const initialState = {
  /* panier: [], */
  userName:'',
  password:'',
  userInfo: [],
  isConnected: false,
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    /* case SEND_ARTICLE_TO_BASKET:
      return {
        ...state,
      listArticles: state.articlesList.filter((article)=> article.title.toLowerCase().replace(/é|è|ê/g,"e").includes(action.newValue)),
      } */
    default:
      return state;
  }
};

export default reducer;