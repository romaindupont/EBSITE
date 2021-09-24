import { ORDERING } from "../actions/order";

const initialState = {
  orderList: [
    {
      id: 1,
      numeroCde: 1,
      dateCommande: '23/09/2021',
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
      dateLivraison: '25/09/2021',
      totalAmount: 140

    },
    {
      id: 1,
      numeroCde: 2,
      dateCommande: '10/09/2021',
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
      dateLivraison: '20/09/2021',
      totalAmount: 110

    }
  ],
  numeroCde:2,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ORDERING:
      return {
        ...state,
        orderList: [
          ...state.orderList,
          {
            id: action.orderNumber,
            numeroCde: action.orderNumber,
            dateCommande: action.date,
            user_id: action.user_id,
            order: action.orderList,
            infoCde: action.infoCde,
            dateLivraison: action.dateLivraison,
            totalAmount: action.totalAmount
          }
        ]
      }
    default:
      return state;
  }
};

export default reducer;