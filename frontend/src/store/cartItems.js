import csrfFetch from "./csrf"

const RECEIVE_CART_ITEMS = 'cartItems/RECEIVE_CART_ITEMS'
const RECEIVE_CART_ITEM = 'cartItems/RECEIVE_CART_ITEM'
const REMOVE_CART_ITEM = 'cartItems/REMOVE_CART_ITEM'

const receiveCartItem = (cartItem) =>{
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const removeCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId
    }
}


// selectors

export const getCartItem = (cartItemId) => state => {
    return state?.cartItems ? state.cartItems[cartItemId] : null
}

export const getCartItems = state => {
    return state?.cartItems ? Object.values(state.cartItems) : []
}

export const fetchCartItems = () => async dispatch => {
    const response = await csrfFetch(`/api/cart_items`)
        const data = await response.json();
        dispatch(receiveCartItems(data));
}

export const createCartItem = cartItem => async (dispatch) => {
    const response = await csrfFetch(`/api/cart_items`, {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })

    const data = await response.json()
    dispatch(receiveCartItem(data))
}

export const deleteCartItem = cartItemId => async (dispatch) => {
    debugger
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: "DELETE"
    })

    dispatch(removeCartItem(cartItemId))
}

export const fetchCartItem = (cartItemId) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`)

    const data = await response.json()
    dispatch(receiveCartItem(data))
}


export const cartItemsReducer = (state = {}, action) => {
    const newState = {...state}

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return {...action.cartItems};
        case RECEIVE_CART_ITEM:
            return {...state, [action.cartItem.id]: action.cartItem}
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId]
            return newState
        default:
            return state;
    }
}

export default cartItemsReducer