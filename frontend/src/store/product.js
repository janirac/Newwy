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

export const fetchProducts = () => async dispatch => {
    const response = await fetch('/api/products')

    const data = await response.json()
    dispatch(setProducts(data))
}

export const fetchProduct = productId => async dispatch => {
    debugger
    const response = await csrfFetch(`/api/products/${productId}`)
    
    const data = await response.json()
    debugger
    dispatch(addProduct(data))
    return response
}

export const createBench = product => async dispatch => {
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