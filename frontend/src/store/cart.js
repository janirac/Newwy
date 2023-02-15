import csrfFetch from "./csrf"

const RECEIVE_CART = 'RECEIVE_CART'

const receiveCart = (cart) =>({
    type: RECEIVE_CART,
    cart
})


export const getCart = (cartId) => state => {
    return state?.cart?.shopping ? state.cart.shopping : null
}

export const fetchCart = () => async dispatch => {
    const response = await csrfFetch(`/api/cart`)

        const data = await response.json()
        dispatch(receiveCart(data))
}

export const cartReducer = (state = {}, action) => {
    const newState = {...state}

    switch (action.type) {
        case RECEIVE_CART:
            newState['shopping'] = action.cart
            return newState
            // return {...newState, ...action.cart}
        default:
            return state;
    }
}

export default cartReducer