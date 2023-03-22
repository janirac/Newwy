import { useState } from "react"
import { searchIcon } from "../Navigation"
import "./SearchModal.css"

function SearchModal() {
    const [searchWord, setSearchWord] = useState(" ")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchWord(e.target.value)
    }

    const searchResults = () => {
        if (searchWord) {
            return (
                <div>
                    {
                        
                    }
                </div>
            )
        }
    }

    return (
        <div className="search-modal-container">
            <div className="search-bar">
                {searchIcon}
                <input 
                    type="text"
                    placeholder="Search Products"
                    onChange={handleChange}
                    value={searchWord}
                />
            </div>
            <div className="popular-buttons">

            </div>
            {searchResults()}
        </div>
    )
}

export default SearchModal