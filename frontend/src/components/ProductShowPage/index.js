import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product";
import "./ProductShowPage.css"
const heartIcon = () => ( 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
)

function ProductShowPage() {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products[productId])

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId, dispatch])

    if(!product) {
        return null
    }

    // {product.name}
    //         {"----"}
    //         {product.price}
    //         {"----"}
    //         {product.description}
    //         {"----"}
    //         {product.amount}
    //         {"----"}
    //         {product.category}
    //         {"----"}
    //         {product.color}
    //         {"----"}
    //         {product.condition}
    //         {"----"}
    //         {product.brand}
    //         {"----"}
    //         {product.size}

    return (
        <div className="product-show-main">
                <div className="product-display-photo-main">
                    <ul className="product-display-photo-container">
                        <li className="product-display-photo">
                            <img className='img-dropdown-showpage' src="https://via.placeholder.com/500"/>
                        </li>
                        <li className="product-display-photo">
                            <img className='img-dropdown-showpage' src="https://via.placeholder.com/500"/>
                        </li>
                        <li className="product-display-photo">
                            <img className='img-dropdown-showpage' src="https://via.placeholder.com/500"/>
                        </li>
                        <li className="product-display-photo">
                            <img className='img-dropdown-showpage' src="https://via.placeholder.com/500"/>
                        </li>
                    </ul>
                </div>
            <div className="product-info-main">
                <div className="product-info-container">
                    <div className="product-info-label">
                        <div className="product-seller-info">
                            <div className="profile-photo-username">
                                <img className='img-dropdown-profile-photo' src="https://via.placeholder.com/50"/>
                                <p>username</p>
                            </div>
                            <div className="favorite-button-main">
                                <button className="favorite-button">
                                    <div className="favorite-number">23</div>
                                    <div className="favorite-heart">{heartIcon()}</div>
                                </button>
                            </div>
                        </div>
                        <div className="product-title-price-size">
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">{product.price}</div>
                            <div className="size">Size: {product.size}</div>
                        </div>
                    </div>
                    <div className="product-cart-description">
                        <div className="product-add-bag">
                            <button className="product-add-bag-btn">Add to Bag</button>
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
    )
}

export default ProductShowPage