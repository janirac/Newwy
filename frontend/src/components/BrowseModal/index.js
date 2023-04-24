import "./BrowseModal.css"
import { exitModalIcon } from "../Navigation"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import SearchResults from "../SearchResults"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

function BrowseModal({setShowBrowseModal}) {
    const [showModal, setShowModal] = useState(true)
    const [category, setCategory] = useState("")
    const history = useHistory()
    const location = useLocation()
    const [previousLocation, setPreviousLocation] = useState(null)

    useEffect(() => {
        if (previousLocation !== null && location.pathname !== previousLocation.pathname) {
          setShowBrowseModal(false)
        }
    
        setPreviousLocation(location);
    }, [location]);

    const handleClick = () => {
        setShowBrowseModal(false)
    }

    const handleOnClick = (e) => {
        setCategory(e.target.value)
        history.push(`/search?query=${e.target.value}`)
        setShowBrowseModal(false)
    }

    return (
        <div className={`browse-modal-container ${showModal ? "show" : "hide"}`}>
            <div className="main-browse">
                <div className="browse-container-header">
                    <div></div>
                    <h1 className="browse-header-text">Browse</h1>
                    <button onClick={handleClick} className="exit-btn-browse">{exitModalIcon}</button>
                </div>
                <div className="browse-photo">
                    <img  className="img-browse-photo" src="https://newwy-seeds.s3.us-east-2.amazonaws.com/dylann-hendricks-v_mk4MA53fo-unsplash.jpg" />
                </div>
                <div className="button-section-browse">
                    <button value="All Clothing" className="browse-category-btn" onClick={handleOnClick}>
                        All Clothing
                    </button>
                    <button value="Women" className="browse-category-btn" onClick={handleOnClick}>
                        Women
                    </button>
                    <button value="Men" className="browse-category-btn" onClick={handleOnClick}>
                        Men
                    </button>
                    <button value="Trending" className="browse-category-btn" onClick={handleOnClick}>
                        Trending
                    </button>
                </div>
            {category ? <SearchResults category={category}/> : " "}
            </div>
        </div>
    )
}

export default BrowseModal