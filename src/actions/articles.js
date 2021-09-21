export const CHANGE_ARTICLES_FIELD = 'CHANGE_ARTICLES_FIELD';
export const changeArticlesField = (newValue,key) => ({
  type: CHANGE_ARTICLES_FIELD,
  newValue,
  key,
});

export const SAVE_ARTICLE_ID = 'SAVE_ARTICLE_ID';
export const saveArticleId = (id) => ({
  type: SAVE_ARTICLE_ID,
  id
});

export const DUST_ARTICLE = 'DUST_ARTICLE';
export const dustArticle = (id, quantity) => ({
  type: DUST_ARTICLE,
  id, 
  quantity
});

export const MINUS_ARTICLE = 'MINUS_ARTICLE';
export const minusArticle = (id, quantity) => ({
  type: MINUS_ARTICLE,
  id,
  quantity
});

export const PLUS_ARTICLE = 'PLUS_ARTICLE';
export const plusArticle = (id, quantity) => ({
  type: PLUS_ARTICLE,
  id,
  quantity
});