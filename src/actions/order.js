export const SEND_ARTICLE_TO_BASKET = 'SEND_ARTICLE_TO_BASKET';
export const sendArticleToBasket = (article_id, quantity) => ({
  type: SEND_ARTICLE_TO_BASKET,
  article_id,
  quantity
});

export const ORDERING = 'ORDERING';
export const ordering = (orderNumber, orderList, date, user_id, infoCde, dateLivraison, totalAmount) => ({
  type: ORDERING,
  orderNumber,
  orderList,
  date,
  user_id,
  infoCde,
  dateLivraison,
  totalAmount
});

export const ORDER_NUMBER_SELECT = 'ORDER_NUMBER_SELECT';
export const orderNumberSelect = (orderNumber) => ({
  type: ORDER_NUMBER_SELECT,
  orderNumber
});