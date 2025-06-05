import { configureStore, createSlice } from "@reduxjs/toolkit";
import favoritesReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer
    }
});

