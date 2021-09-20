export const SEND_ARTICLE_TO_BASKET = 'SEND_ARTICLE_TO_BASKET';
export const sendArticleToBasket = (article_id, quantity) => ({
  type: SEND_ARTICLE_TO_BASKET,
  article_id,
  quantity
});