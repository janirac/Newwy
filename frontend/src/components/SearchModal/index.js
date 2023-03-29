import { useState } from "react"
import { useHistory } from "react-router-dom"
import { searchIcon } from "../Navigation"
import { exitModalIcon } from "../Navigation"
import "./SearchModal.css"

function SearchModal() {
    const [searchWord, setSearchWord] = useState("")
    const [showModal, setShowModal] = useState(true)
    const [error, setError] = useState("")

    const history = useHistory()

    const handleChange = (e) => {
        setSearchWord(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            if(searchWord.replace(/\s+/g, '') === ""){
                setError("you searched for nothing! Try Again")
            } else {
                setShowModal(false)
                history.push(`/search?query=${searchWord}`)
            }
        }
    } 

    const handleOnClick = () => {
        setShowModal(false)
        history.push(`/search?query=${searchWord}`)
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
            <button onClick={handleClick} className="modal-close">{exitModalIcon}</button>
            <div className="main-search-modal">
                <div className="search-bar">
                    <div onClick={handleOnClick}>
                        {searchIcon}
                    </div>
                    <input 
                        className="input-search"
                        onChange={handleChange}
                        type="text"
                        placeholder="Search Products"
                        value={searchWord}
                        onKeyDown={handleSubmit}
                    />
                </div>
                    {error ? 
                        <div className="search-error">
                            {error}
                        </div> 
                        : ""
                    }
                <div className="popular-buttons">
                    <div> 
                        <p className="popular-section-text">POPULAR SEARCHES</p>
                    </div>
                    <div className="popular-section">
                        {popularSearches.map((popularSearch) => (
                            <button 
                            className="popular-search-buttons"
                            onClick={() => {
                                setShowModal(false)
                                history.push(`/search?query=${popularSearch}`)
                            }}>
                                {popularSearch}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal