export interface iAction {
    type: string,
    payload: any
}
export interface IRootState {
    fetchCharacters: any;
    fetchFavorites: any;
}