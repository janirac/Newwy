import { heartIcon } from "../ProductShowPage";
import "./ProductIndexPage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink, useLocation } from "react-router-dom";

function ProductCard( { product } ) {
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

    return (
        <NavLink className='product-card-link' to={`/products/${product.id}`}>
            <div className="product-card-main">
                <div className="product-card-container">
                    <div className="img-main">
                        {hasManyImages && !locationIndex ? 
                            <Carousel slidesToSlide={1} responsive={responsive} className='single-product-carousel'>
                                {
                                    product.images.map(image => (
                                        <img className='img-dropdown-indexpage' src={image.imageUrl}/>
                                    ))
                                }
                            </Carousel>
                        :
                            <img className='img-dropdown-indexpage' src={mainImage}/>
                        }
                            <button className="img-dropdown-btn">
                                <div className="heart-icon-index">{heartIcon()}</div>
                            </button>
                    </div>
                    <div className="product-index-description">
                        <div className="product-index-description-container">
                            <p>{product.name}</p>
                            <p>Size: {product.size}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default ProductCard;