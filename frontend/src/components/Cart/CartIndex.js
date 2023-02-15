import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import "./Cart.css"

const CartItems = () => {
    const cartItems = useSelector(state => Object.values(state.cartItems))

    return (
        <div className="cart-container">
            <div className="cart-container-header">
                <h1>My Bag</h1>
                <button>X</button>
            </div>
            <ul>
                {
                    cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)
                }
            </ul>
        </div>
    )
}

export default CartItems