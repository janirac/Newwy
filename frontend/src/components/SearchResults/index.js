import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import ProductCard from "../ProductIndexPage/ProductCard"
import "./SearchResults.css"
import { categoryMap } from "../../utils/categoryConstants"

function SearchResults({category}) {
    debugger

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get("query")
    const products = useSelector(state => Object.values(state.products))

    if(query){
        category = query
    }
    
    const filteredProducts = products.filter(product => {
        let match = false  
        if (category && product.categories[0].some(categoryNum => {
            return categoryMap[categoryNum].toLowerCase() === category.toLowerCase()
        })){
            match = true
        }
        if (product.name.toLowerCase().includes(query.toLowerCase())){
            match = true
        }
        return match
    });
        
    console.log(filteredProducts)
    if(filteredProducts.length === 0) {
        return (
            <div className="container-search-results">
            
            </div>
        )
    }

        return (
            <div>
            <div className="search-results-number">
                <p>SEARCH RESULTS</p>
                <h1>{category ? category : query}</h1>
                <p>{filteredProducts.length} Results</p>
            </div>
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