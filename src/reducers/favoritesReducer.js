import { TOGGLE_FAVORITES, ADD_FAVORITES } from './../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, {
                    id: action.payload.id,
                    title: action.payload.title,
                    director: action.payload.director,
                    metascore: action.payload.metascore,
                    genre: action.payload.genre,
                    description: action.payload.description
                }]
            }
        default:
            return state;
    }
}

export default reducer;