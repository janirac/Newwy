import { useSelector } from "react-redux"
import "./Cart.css"
import CartItemCard from "./CartItem"
function Checkout() {
    const cartItems = useSelector(state => Object.values(state.cartItems))

    const handleSubmit = () => {
        
    }

    return (
        <div className="checkout-main">
            <div className="checkout-headers">
                <p>Checkout with newwy</p>
                <p>Nice find—now make it yours!</p>
            </div>
            <div className="checkout-middle-section">
                <div className="checkout-card-info">
                    <p className="ship-to">SHIP TO</p>
                    <div className="checkout-input-fields">
                        <input className="input-text-checkout" placeholder="First Name*"/>
                        <input className="input-text-checkout" placeholder="Last Name*"/>
                        <input className="input-text-checkout" placeholder="Street Address"/>
                    </div>
                    <div>
                        <p>PAY WITH</p>
                        {/* <img /> */}
                    </div>
                </div>
                <div className="shopping-cart-items">
                    <div className="checkout-logo">

                    </div>
                    <ul className="cart-item-checkout">
                        {
                            cartItems.map(cartItem => <CartItemCard cartItem={cartItem}/>)
                        }
                    </ul>
                    <div className="checkout-calculations">
                        <div className="checkout-totals">
                            <h1 className="total-text">Subtotal</h1>
                            <h1 className="num-text">TBD</h1>
                        </div>
                        <div className="checkout-totals">
                            <h1 className="total-text">Shipping</h1>
                            <h1 className="num-text">TBD</h1>
                        </div>
                        <div className="checkout-totals">
                            <h1 className="total-text">Taxes</h1>
                            <h1 className="num-text">TBD</h1>
                        </div>
                    </div>
                    <div>
                        <button onSubmit={handleSubmit} className="confirm-btn">Confirm + Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout