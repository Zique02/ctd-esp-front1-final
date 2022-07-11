import axios from "axios";

export const FETCH_START = 'FETCH_START';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESS = 'FETCSUCCESS';

export const fetchCharactersStart = () => {
    return {
        type: FETCH_START
    }
}

export const fetchCharactersError = (messageError: string) => {
    return {
        type: FETCH_ERROR,
        payload: messageError
    }
}

export const fetchCharactersSucess = (response: {}) => {
    return {
        type: FETCH_SUCCESS,
        payload: response
    }
}

export const fetchCharactersThunk = (dispatch: any, page: number) => {
    dispatch(fetchCharactersStart())
    if (page) {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(response => {
            dispatch(fetchCharactersSucess(response.data))
        }).catch(error => {
            dispatch(fetchCharactersError(error.message))
        })
    } else {
        axios.get('https://rickandmortyapi.com/api/character').then(response => {
            dispatch(fetchCharactersSucess(response.data))
        }).catch(error => {
            dispatch(fetchCharactersError(error.message))
        })
    }
}

export const fetchCharacterByName = (dispatch: any, title: string) => {
    dispatch(fetchCharactersStart())
    if (title) {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${title}`).then(response => {
            dispatch(fetchCharactersSucess(response.data))
        }).catch(error => {
            dispatch(fetchCharactersError(error.message))
        })
    } else {
        axios.get('https://rickandmortyapi.com/api/character').then(response => {
            dispatch(fetchCharactersSucess(response.data))
        }).catch(error => {
            dispatch(fetchCharactersError(error.message))
        })
    }
}