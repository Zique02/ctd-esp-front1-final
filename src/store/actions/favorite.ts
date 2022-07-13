import { ICharacter } from "../../interfaces/Character";

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const RESET_FAVS = 'RESET_FAVS';

/**
 * Responsavel adicionar um favorito ao state local de Favoritos
 * @param character - character que será adicionado aos favoritos
 */
export const addFav = (character: ICharacter | undefined) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

/**
 * Responsavel remover um favorito do state local de Favoritos
 * @param id - id do character que será removido dos favoritos
 */
export const removeFav = (id: number | undefined) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

/**
 * Responsavel resetar os favoritos do state local de Favoritos
 */
export const resetFavs = () => {
    return {
        type: RESET_FAVS
    }
}