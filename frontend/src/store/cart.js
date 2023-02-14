import csrfFetch from "./csrf"

export const ADD_CART_ITEM = '/cart/addCartItem';
export const REMOVE_CART_ITEM = '/cart/removeCartItem';

export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM,
  cartItem,
});

export const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

const initialState = {
    items: []
}

const cartReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            const newState = {...state}
            const itemIndex = state.items.findIndex(
                item => item.id === action.cartItem.id
              );
              if (itemIndex === -1) {
                return {
                  newState,
                  items: [newState.items, { ...action.cartItem }],
                };
            } else {
                return newState
            }
        case REMOVE_CART_ITEM:
            return newState
        default: 
            return state
        
    }
}

export default cartReducer;