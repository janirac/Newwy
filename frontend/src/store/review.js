import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'reviews/recieveReviews'
const RECEIVE_REVIEW = 'reviews/recieveReview'

const recieveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const recieveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const fetchReviews = (productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`)

    const data = await response.json()
    dispatch(recieveReviews(data))
}

export const createReview = (review, productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}/reviews`, {
        method: 'POST',
        body: JSON.stringify(review)
    })

    const data = await response.json()
    dispatch(recieveReview(data))
}

function reviewsReducer(state = {}, action ){
    const newState = {...state}

    switch(action.type){
        case RECEIVE_REVIEWS:
            return {...action.reviews}
        default:
            return state
    }
}

export default reviewsReducer