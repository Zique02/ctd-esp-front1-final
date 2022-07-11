import { combineReducers } from "@reduxjs/toolkit";
import { fetchFavoritesReducer } from "./fecthFavorites";
import { fetchApiReducer } from "./fetchApiReducer";

interface IRootState {
    fetchCharacters: any;
    fetchFavorites: any;
}
export const reducers = combineReducers<IRootState>({
    fetchCharacters: fetchApiReducer,
    fetchFavorites: fetchFavoritesReducer
})