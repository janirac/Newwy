import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import ProductCard from "../ProductIndexPage/ProductCard"
import "./SearchResults.css"
import { categoryMap } from "../../utils/categoryConstants"

function SearchResults({category}) {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    let query = queryParams.get("query")
    const products = useSelector(state => Object.values(state.products))

    if(query){
        category = query
    } else {
        query = category
    }
    
    const filteredProducts = products.filter(product => {
        let match = false  
        if (category && product.categories[0].some(categoryNum => {
            return categoryMap[categoryNum].toLowerCase().replace(/\s+/g, '') === category.toLowerCase().replace(/\s+/g, '')
        })){
            match = true
        }
        if (product.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))){
            match = true
        }
        return match
    });
        
    if(filteredProducts.length === 0) {
        return (
            <div className="container-search-results">
                Sorry, No Results Found For "{query}""
            </div>
        )
    }

        return (
            <div>
            <div className="search-results-number">
                <p className="category">CATEGORY</p>
                <h1 className="category-name-text">{category ? category.toLowerCase() : query.toLowerCase()}</h1>
            </div>
                <p className="results-text">{filteredProducts.length} Results</p>
            <div className="product-index-main">
            <div className="product-index-container">
                {filteredProducts.map(filteredProduct => (
                    <ProductCard key={filteredProduct.id} product={filteredProduct}/>
                ))}
            </div>
        </div>
        </div>
    )
}

export default SearchResults