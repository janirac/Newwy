import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../store/product"
import { deleteCartItem, fetchCartItems } from "../../store/cartItems"
import { useEffect } from "react"

const CartItemCard = ( { totalPrice, setTotalPrice, cartItem } ) => {
    const dispatch = useDispatch()
    const productId = cartItem.productId
    const product = useSelector(getProduct(productId))

    // useEffect(() => {
    //     setTotalPrice(prevTotalPrice => prevTotalPrice + parseFloat(product.price))
    // }, [product.price])

    const handleClick = (e) => {
        e.preventDefault()
        // setTotalPrice(prevTotalPrice => prevTotalPrice - parseFloat(product.price))
        dispatch(deleteCartItem(cartItem.id))
    }

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    if(!product) {
        return null
    }
   
    return (
        <div className="card-item-card">
            <div className="cart-item-card-type">
                <img className="cart-image-show" src={product.images[0].imageUrl}/>
                <div className="cart-description">
                    <div>{product.name}</div>
                    <div>{product.size}</div>
                    <div>{product.condition}</div>
                    <div>${parseFloat(product.price)}</div>
                </div>
            </div>
            <button className="cart-item-btn" onClick={handleClick}>Remove</button>
        </div>
    )
}

export default CartItemCard