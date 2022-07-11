import { ICharacter } from "../../interfaces/Character";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const RESET_FAVS = 'RESET_FAVS';

export const addFav = (character: ICharacter | undefined) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id: number | undefined) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const resetFavs = () => {
    return {
        type: RESET_FAVS
    }
}