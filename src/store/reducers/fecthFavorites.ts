import { iAction } from "../../interfaces/Redux";
import { ICharacter } from "../../interfaces/Character";
import { ADD_FAV, REMOVE_FAV, RESET_FAVS } from "../actions/favorite";

const initalState = {
    favoritos: []
}

/**
 * Responsavel gereciar chamadas ao state local de Favoritos e retornar os dados
 * @param state - estado atual do reducer
 * @param action - action que será executada
 * @returns retorna o novo estado do reducer
 */
export const fetchFavoritesReducer = (state = initalState, action: iAction) => {
    switch (action.type) {
        case ADD_FAV:
            if (state.favoritos.filter((el: ICharacter) => el.id === action.payload.id).length > 0) {
                return {
                    state
                }
            } else {
                return {
                    ...state,
                    favoritos: [
                        ...state.favoritos,
                        action.payload
                    ]
                }
            }

        case REMOVE_FAV:
            return {
                ...state,
                favoritos:
                    state.favoritos.filter((fav: ICharacter) => fav.id !== action.payload)
            }
        case RESET_FAVS:{
            return {
                ...state,
                favoritos: []
            }
        }
        default:
            return {
                ...state
            }
    }
}