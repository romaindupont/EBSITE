import { combineReducers } from 'redux';

import categoryReducer from './category';
import articlesReducer from './articles';
import userReducer from './user';
import orderReducer from './order';

const rootReducer = combineReducers({
 category: categoryReducer,
 articles:articlesReducer,
 user:userReducer,
 order:orderReducer,
});

export default rootReducer;