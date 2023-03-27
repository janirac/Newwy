import { useState } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { searchIcon } from "../Navigation"
import SearchResults from "../SearchResults"
import "./SearchModal.css"

function SearchModal() {
    const [searchWord, setSearchWord] = useState(" ")
    const [showModal, setShowModal] = useState(true)

    const history = useHistory()

    const handleChange = (e) => {
        setSearchWord(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search?query=${searchWord}`)
        }
    }

    const handleClick = () => {
        setShowModal(false)
    }

    const popularSearches = [
        "VINTAGE", 
        "SWIMWEAR", 
        "DRESSES", 
        "TRENDING", 
        "HOT STUFF", 
        "OUTERWEAR", 
        "ACCESSORIES"
    ]

    return (
        <div className={`search-modal-container ${showModal ? "show" : "hide"}`}>
            <button onClick={handleClick} className="modal-close">&times;</button>
            <div className="search-bar">
                {searchIcon}
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Search Products"
                    value={searchWord}
                    onKeyDown={handleSubmit}
                />
            </div>
            <div className="popular-buttons">
                <div> 
                    <p>POPULAR SEARCHES</p>
                </div>
                <div className="popular-section">
                    {popularSearches.map((popularSearch) => (
                        <button onClick={() => {
                            setSearchWord(popularSearch);
                            history.push(`/search?query=${searchWord}`)
                        }}>
                            {popularSearch}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchModal