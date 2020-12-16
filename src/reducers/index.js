import { combineReducers } from 'redux';
import { listReducer } from './CommentsList';
import { formReducer } from './CommentsForm'

export const rootReducer = combineReducers({
  list: listReducer,
  form: formReducer,
})
