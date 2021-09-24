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