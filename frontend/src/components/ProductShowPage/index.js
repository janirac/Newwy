import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product";
import Favorites from "../Favorites";
import { getCart } from "../../store/cart";
import { getProduct } from "../../store/product";
import "./ProductShowPage.css"
// import CartItems from "../Cart/CartIndex";
// import { createCartItem } from "../../store/cart";
import { createCartItem } from "../../store/cartItems";
import { fetchCart } from "../../store/cart";
import ReviewShow from "../Reviews/ReviewIndex";
import { useHistory } from "react-router-dom";

export const heartIcon = () => ( 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
)

function ProductShowPage() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(getProduct(productId))
    const cart = useSelector(getCart())
    const cartItems = useSelector(state => Object.values(state.cartItems))
    const cartItemsObj = useSelector(state => state.cartItems)
const history = useHistory()


    // const favoriteProductId = useSelector(state => state.)\\
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!sessionUser){
            history.push(`/login`)
        }
        let check = false
        cartItems.map((item) => {
                    if(item.productId === parseInt(productId)){
                        check = true 
                    }
        })
        if(check === false){
            dispatch(createCartItem({cartItem: {productId, cartId: cart.id}}))
        }
    }

    useEffect(() => {
        if (productId){
            dispatch(fetchProduct(productId))
            dispatch(fetchCart(cart))
        }
    }, [dispatch, productId])

    if(!product) {
        return null
    }

    return (
            <div>
        <div className="product-show-main">
                <div className="product-display-photo-main">
                    <ul className="product-display-photo-container">
                    {product.images.map(image => (
                        <li className="product-display-photo">
                            <img className='img-dropdown-showpage' src={image.imageUrl}/>
                        </li>
                    ))}
                    </ul>
                </div>
            <div className="product-info-main">
                <div className="product-info-container">
                    <div className="product-info-label">
                        <div className="product-seller-info">
                            <div className="profile-photo-username">
                                <img className='img-dropdown-profile-photo' src="https://i.ibb.co/GVw3f6F/silk-reine-inline.png"/>
                                <p>{sessionUser ? sessionUser.email : product.brand}</p>
                            </div>
                        </div>
                        <div className="product-title-price-size">
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">${product.price}</div>
                            <div className="size">Size: {product.size}</div>
                        </div>
                    </div>
                    <div className="product-cart-description">
                        <div className="product-add-bag">
                            <button className="product-add-bag-btn" onClick={handleSubmit} >
                                Add to Bag
                            </button>
                        </div>
                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className="product-description-depth">
                        <div className="product-hashtag">

                        </div>
                        <div className="product-description-brand-condition-color-price">
                            <p>Brand: {product.brand}</p>
                            <p>Condition: {product.condition}</p>
                            <p className="product-color">Color: 
                                <p className="color">{product.color}</p>
                            </p>
                            {product.original_price ? product.original_price : " "}
                            <p>Original Price: {product.original_price}</p>
                        </div>
                        <div className="product-description-update-time">

                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="review-section">
                    <ReviewShow />
            </div>
            </div>
    )
}

export default ProductShowPage