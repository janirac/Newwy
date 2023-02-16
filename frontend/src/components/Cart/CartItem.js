import { useDispatch, useSelector } from "react-redux"
import { getProductId } from "../../store/product"
import { deleteCartItem } from "../../store/cartItems"

const CartItemCard = ( { cartItem } ) => {
    const dispatch = useDispatch()
    const productId = cartItem.productId
    console.log(productId)
    const product = useSelector(getProductId(productId))

    console.log(product)
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(deleteCartItem(cartItem.id))
    }
    
    return (
        <div className="card-item-card">
            <div className="cart-item-card-type">
                <img className="cart-image-show" src={product.images[0].imageUrl}/>
                <div className="cart-description">
                    <div>{product.name}</div>
                    <div>{product.size}</div>
                    <div>{product.condition}</div>
                    <div>{product.price}</div>
                </div>
            </div>
            <button className="cart-item-btn" onClick={handleClick}>Remove</button>
        </div>
    )
}

export default CartItemCard