import { combineReducers } from 'redux';

import categoryReducer from './category';
import articlesReducer from './articles';
import userReducer from './user';

const rootReducer = combineReducers({
 category: categoryReducer,
 articles:articlesReducer,
 user:userReducer,
});

export default rootReducer;