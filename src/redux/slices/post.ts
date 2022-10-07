import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListPostPreviewEmptyState, PostPreview } from 'src/models';
import { RootState } from '../store';

export const postPreview = createSlice({
  name: 'postPreview',
  initialState: ListPostPreviewEmptyState,
  reducers: {
    addPostPreview: (_, action: PayloadAction<PostPreview[]>) => {
      return action.payload;
    },
    deletePostPreview: (state, action: PayloadAction<PostPreview["id"]>) => {
      return state.filter(item => item.id !== action.payload)
    },
    modifyPostPreview: (state, action: PayloadAction<PostPreview>) => {
      return state.map(item => item.id === action.payload.id ? action.payload : item)
    },
    resetPostPreview: () => {
      return ListPostPreviewEmptyState;
    }
  }
})

export const { addPostPreview, modifyPostPreview, resetPostPreview, deletePostPreview } = postPreview.actions;
export const selectListPostPreview = (state: RootState) => state.postReducer
export default postPreview.reducer;