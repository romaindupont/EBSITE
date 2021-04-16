export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const fetchCategory = (categoryList) => ({
  type: FETCH_CATEGORY,
  categoryList,
});

export const CHANGE_CATEGORY_FIELD = 'CHANGE_CATEGORY_FIELD';
export const changeCategoryField = (newValue,key) => ({
  type: CHANGE_CATEGORY_FIELD,
  newValue,
  key,
});

export const SEARCH_CATEGORY = 'SEARCH_CATEGORY';
export const searchCategory = (list) => ({
  type: SEARCH_CATEGORY,
  list,
});