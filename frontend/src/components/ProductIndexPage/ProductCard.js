import { heartIcon } from "../ProductShowPage";
import "./ProductIndexPage.css"

function ProductCard( { product } ) {

    return (
        <div className="product-card-main">
            <div className="product-card-container">
                <div className="img-main">
                    <img className='img-dropdown-indexpage' src="https://via.placeholder.com/500"/>
                    <div className="heart-icon-index">{heartIcon()}</div>
                </div>
                <div className="product-index-description">
                    <p>{product.name}</p>
                    <p>Size: {product.size}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;