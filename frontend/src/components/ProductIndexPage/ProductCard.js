import { heartIcon } from "../ProductShowPage";
import "./ProductIndexPage.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ProductCard( { product } ) {

    const responsive = {
        desktop: {
          breakpoint: { max: 300, min: 100 },
          items: 1
        }
    };

    return (
        
            <div className="product-card-main">
                <div className="product-card-container">
                    <div className="img-main">
                            <img className='img-dropdown-indexpage' src="https://via.placeholder.com/500"/>
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
        
    )
}

export default ProductCard;