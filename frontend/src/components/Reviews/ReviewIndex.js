import { useDispatch, useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reviews.css'

function ReviewShow(){
    const dispatch = useDispatch()
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
                <img className='img-dropdown-profile-photo' src="https://via.placeholder.com/50"/>
            </div>
            <div className="review-content">
                <div className="review-username">
                    username
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