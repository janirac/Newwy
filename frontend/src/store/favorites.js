import csrfFetch from "./csrf";

const SET_FAVORITES ='/favorites/setFavorites'
const REMOVE_FAVORITE ='/favorites/removeFavorite'
const ADD_FAVORITE ='/favorites/addFavorite'

const setFavorites = (favorites) => {
    return {
        type: SET_FAVORITES,
        favorites
    }
}

const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        favorite
    }
}

const removeFavorite = (favoriteId) => {
    return {
        type: REMOVE_FAVORITE,
        favoriteId
    }
}

export const fetchFavorites = () => async(dispatch) => {

    const response = await csrfFetch(`/api/favorites/`)

    const data = await response.json()
    dispatch(setFavorites({data}))
}  

// export const fetchFavorite = (productId) => async(dispatch) => {
//     const response = await csrfFetch(`/api/favorites/${productId}`)

//     const favorite = await response.json()
//     dispatch(addFavorite(favorite))
// }  

export const deleteFavorite = (favoriteId) => async(dispatch) => {
    const response = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE'
    })

    dispatch(removeFavorite(favoriteId))
}  

export const createFavorite = (favorite) => async(dispatch) => {
    const response = await csrfFetch(`/api/favorites`, {
        method: 'POST',
        body: JSON.stringify(favorite)
    })

    const data = await response.json()
    dispatch(addFavorite(data.favorite))
}


const favoritesReducer = (state = {}, action) => {
    const newState = {...state}
    switch(action.type){
        case SET_FAVORITES:
            return {...newState, ...action.favorites}
        case ADD_FAVORITE:
            newState[action.favorite.id] = action.favorite
            return newState
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId]
            return newState
        case REMOVE_FAVORITE:
            delete newState[action.favoriteId]
            return newState
        default:
            return state
    }
}

export default favoritesReducer 