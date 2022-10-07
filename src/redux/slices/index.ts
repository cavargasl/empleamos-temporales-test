import { combineReducers } from '@reduxjs/toolkit';

import { default as postReducer } from './post';

const rootReducer = combineReducers({
  postReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;