import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = 'reviews/recieveReviews'
const RECEIVE_REVIEW = 'reviews/recieveReview'
const REMOVE_REVIEW = 'reviews/removeReview'

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

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
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

export const deleteReview = (reviewId, productId) => async(dispatch) => {
    const response = await csrfFetch(`/api/products/${productId}/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    dispatch(removeReview(reviewId))
}

export const updateReview = (review, productId) => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
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
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW:
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewsReducer