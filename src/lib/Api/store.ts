import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import recipeReducer from './features/recipesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    recipe: recipeReducer,
  },
});