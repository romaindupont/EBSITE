import { combineReducers } from 'redux';

import categoryReducer from './category';
import articlesReducer from './articles';

const rootReducer = combineReducers({
 category: categoryReducer,
 articles:articlesReducer,
});

export default rootReducer;