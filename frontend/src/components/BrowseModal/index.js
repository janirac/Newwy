import "./BrowseModal.css"
import { exitModalIcon } from "../Navigation"
import { useState } from "react"
import CategoryIndex from "../Category/CategoryPages"
import { useHistory } from "react-router-dom"

function BrowseModal() {
    const [showModal, setShowModal] = useState(true)
    const [category, setCategory] = useState("")
    const history = useHistory()

    const handleClick = () => {
        setShowModal(false)
    }

    const handleOnClick = (e) => {
        setCategory(e.target.value)
        history.push(`/search?query=${e.target.value}`)
        setShowModal(false)
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
                    <button value="Kids + Baby" className="browse-category-btn" onClick={handleOnClick}>
                        Kids + Baby
                    </button>
                </div>
            {category ? <CategoryIndex category={category}/> : " "}
            </div>
        </div>
    )
}

export default BrowseModal