import { combineReducers } from 'redux';
import articles from './articleReducer'

export default combineReducers({
  articles: articles,
  // More reducers if there are
  // can go here
});
