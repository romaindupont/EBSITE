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
export const dustArticle = (id) => ({
  type: DUST_ARTICLE,
  id
});