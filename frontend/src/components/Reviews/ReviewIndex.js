import { useDispatch, useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProduct } from "../../store/product";
import { useParams } from "react-router-dom";
import './Reviews.css'
  
function ReviewShow(){
    const dispatch = useDispatch()
    const { productId } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(getProduct(productId))
    const reviews = useSelector(state => Object.values(state.reviews))
    const star = <FontAwesomeIcon className='star-icon' icon={faStar} />
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleHover = value => {
        setHoverValue(value)
    }

    const stars = Array(5).fill(0)

    return (
        <div className="review-container">
            <div className="review-user-photo">
                <img className='img-dropdown-profile-photo' src="https://newwy-seeds.s3.us-east-2.amazonaws.com/Concept+1-3.jpg"/>
            </div>
            <div className="review-content">
                <div className="review-username">
                    {product.brand}
                </div>
                <div className="star-review">
                    {stars.map(() => {
                        return (
                            <button className="image-review" onMouseOver={handleHover} onClick={handleClick}>
                                <div>{star}</div>
                            </button>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}

export default ReviewShow