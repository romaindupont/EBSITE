export const CHANGE_ARTICLES_FIELD = 'CHANGE_ARTICLES_FIELD';
export const changeArticlesField = (newValue,key) => ({
  type: CHANGE_ARTICLES_FIELD,
  newValue,
  key,
});