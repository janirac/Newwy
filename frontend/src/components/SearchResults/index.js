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

    
    const filteredProducts = products.filter(product => {  
        // if (product.categories[0].some(categoryNum => categoryMap[categoryNum])){
        //     return true
        // }
        
        product.name.toLowerCase().includes(query.toLowerCase())
    });
        
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
            <div>
                {filteredProducts.map(filteredProduct => (
                    <ProductCard key={filteredProduct.id} product={filteredProduct}/>
                ))}
            </div>
        </div>
    )
}

export default SearchResults