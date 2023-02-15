import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../store/product"
import { deleteCartItem } from "../../store/cartItems"

const CartItemCard = ( { cartItem } ) => {
    const dispatch = useDispatch()
    const productId = cartItem.productId
    const product = useSelector(getProduct(productId))

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(deleteCartItem(cartItem.id))
    }
    
    return (
        <div className="card-item-card">
            <img className="cart-image-show" src={product.images[0].imageUrl}/>
            <div className="cart-description">
                <div>{product.name}</div>
                <div>{product.size}</div>
                <div>{product.condition}</div>
                <div>{product.price}</div>
            </div>
            <button className="cart-item-btn" onClick={handleClick}>Remove</button>
        </div>
    )
}

export default CartItemCard