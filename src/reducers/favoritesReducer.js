import { TOGGLE_FAVORITES } from './../actions/favoritesActions';

const initialState = {
    favorites: ['test'],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default reducer;