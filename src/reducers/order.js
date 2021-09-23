const initialState = {
  orderList: [
    {
      id: 1,
      numeroCde: 'EB23-09-21-1',
      dateCommande: 23/09/2021,
      user_id: 1,
      order: [
        {
          id: 1,
          article_id: 2,
          quantity: 2,
          amount: 110,
        },
        {
          id: 2,
          article_id: 1,
          quantity: 1,
          amount: 30,
        },
      ],
      infoCde: 'Livré',
      dateLivraison: 25/09/2021,

    },
    {
      id: 1,
      numeroCde: 'EB10-09-21-2',
      dateCommande: 10/09/2021,
      user_id: 1,
      order: [
        {
          id: 1,
          article_id: 2,
          quantity: 2,
          amount: 110,
        },
      ],
      infoCde: 'en livraison',
      dateLivraison: 20/09/2021,

    }
  ],
  
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