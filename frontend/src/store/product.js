import csrfFetch from "./csrf";

const SET_PRODUCTS = 'products/setProducts'
const ADD_PRODUCT = 'products/addProducts'

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const getProductId = productId => state => {
    const product = Object.values(state.products).find((prod => {
        if(prod.id === productId){
            return prod
        }
    }))
    return product
}

export const getProduct = productId => state => {
    return state?.products ? state.products[productId] : null;
}
  
export const fetchProducts = () => async dispatch => {
    const response = await csrfFetch('/api/products')

    const data = await response.json()
    dispatch(setProducts(data))
}

export const fetchProduct = productId => async dispatch => {
    const response = await csrfFetch(`/api/products/${productId}`)
    
    const data = await response.json()
    dispatch(addProduct(data))
    // return response
}

export const createProduct = product => async dispatch => {
    const response = await csrfFetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: { 'Content-Type' : 'application/json'}
    })

    const data = await response.json()
    dispatch(addProduct(data))
    return response
}

function productsReducer(state = {}, action){
    const newState = {...state}
    switch(action.type){
        case SET_PRODUCTS:
            return {...action.products}
        case ADD_PRODUCT:
            newState[action.product.id] = action.product
            return newState
        default: 
            return state
    }
}

export default productsReducer