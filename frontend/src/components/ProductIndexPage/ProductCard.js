import { heartIcon } from "../ProductShowPage";
import "./ProductIndexPage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createFavorite, deleteFavorite, fetchFavorites } from "../../store/favorites";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ProductCard( { product } ) {
    const dispatch = useDispatch()
    const favorites = useSelector(state => Object.values(state.favorites));
    const history = useHistory()

    const mainImage = product.images[0] ? product.images[0].imageUrl : "www.google.com/img.png"
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        }
    };
    const hasManyImages = product.images.length > 0
    const location = useLocation()
    const locationIndex = location.pathname === "/" 
    
    const [isFavorited, setIsFavorited] = useState(false)

    const handleFavoritesButton = (e) => {
        e.preventDefault()
        setIsFavorited(!isFavorited)
        // console.log(favorite)

        return (
            <div>

            </div>
            // <button className="img-dropdown-btn" onClick={handleFavoritesButton}>
            //     {/* {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'} */}
            //     <div className="heart-icon-index">{heartIcon()}</div>
            // </button>
        )
    }

    const handleOnClick = () => {
        // <NavLink className='product-card-link' to={`/products/${product.id}`}>

        // </NavLink>
        
    }

    // debugger
    return (
        <div className="product-card">
            <button className="img-dropdown-btn" onClick={handleFavoritesButton}>
                <div className={`heart-icon-index ${isFavorited ? "active" : ""}`}>{heartIcon()}</div>
            </button>
                {/* <NavLink className='product-card-link' to={`/products/${product.id}`}> */}
                    <div className="product-card-main">
                        <div className="product-card-container">
                            <div className="img-main">
                                {hasManyImages && !locationIndex ? 
                                    <Carousel slidesToSlide={1} responsive={responsive} className='single-product-carousel'>
                                        {
                                            product.images.map(image => (
                                                <img onClick={handleOnClick} className='img-dropdown-indexpage' src={image.imageUrl}/>
                                            ))
                                        }
                                    </Carousel>
                                :
                                    <img className='img-dropdown-indexpage' src={mainImage}/>
                                }
                            </div>
                            <div onClick={handleOnClick} className="product-index-description">
                                <div className="product-index-description-container">
                                    <p>{product.name}</p>
                                    <p>Size: {product.size}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </NavLink> */}
        </div>
    )
}

export default ProductCard;