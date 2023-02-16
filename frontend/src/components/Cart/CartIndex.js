import CartItem from "./CartItem"
import { useSelector } from "react-redux"
import "./Cart.css"
import { exitModalIcon } from "../Navigation"

const CartItems = ({ setShowCart }) => {
    const cartItems = useSelector(state => Object.values(state.cartItems))
    console.log(cartItems)

    return (
        <div className="cart-container">
            <div className="cart-container-header">
                <div></div>
                <h1 className="cart-header-txt">My Bag</h1>
                <div className="exit-btn-cart" onClick={() => setShowCart(false)}>{exitModalIcon}</div>
            </div>
            <ul className="cart-item-list">
                {
                    cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)
                }
            </ul>
            <div className="bottom-cart">
                <div>
                    <h2 className="bottom-cart-txt">Subtotal</h2>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    )
}

export default CartItems
