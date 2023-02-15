import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../store/product"

const CartItemCard = ( { cartItem } ) => {
    const productId = cartItem.productId
    const product = useSelector(getProduct(productId))
    
    return (
        <div className="card-item-card">
            <img className="cart-image-show" src={product.images[0].imageUrl}/>
            <div className="cart-description">
                <div>{product.name}</div>
                <div>{product.size}</div>
                <div>{product.condition}</div>
                <div>{product.price}</div>
            </div>
            {/* <button onClick={() => dispatch(removeCartItem(cartItem.id))}>Remove</button> */}
        </div>
    )
}

export default CartItemCard