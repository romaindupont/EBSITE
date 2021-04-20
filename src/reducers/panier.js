const initialState = {
  panier: [],
  montant:null,
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
/*     case CHANGE_ARTICLES_FIELD:
      return {
        ...state,
      [action.key]: action.newValue,
      listArticles: state.articlesList.filter((article)=> article.title.toLowerCase().replace(/é|è|ê/g,"e").includes(action.newValue)),
      } */
    default:
      return state;
  }
};

export default reducer;