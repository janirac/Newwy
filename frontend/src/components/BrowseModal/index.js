import "./BrowseModal.css"
import { exitModalIcon } from "../Navigation"
import { useState } from "react"

function BrowseModal() {
    const [showModal, setShowModal] = useState(true)

    const handleClick = () => {
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
                    <button className="browse-category-btn">
                        All Clothing
                    </button>
                    <button className="browse-category-btn">
                        Women
                    </button>
                    <button className="browse-category-btn">
                        Men
                    </button>
                    <button className="browse-category-btn">
                        Kids + Baby
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BrowseModal