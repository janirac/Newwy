import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import ProductCard from "../ProductIndexPage/ProductCard"

function SearchResults() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get("query")
    const products = useSelector(state => Object.values(state.products))

    console.log("Im here")
    console.log(products)

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    return (
        <div>
            <div>
                <p>SEARCH RESULTS</p>
                <h1>{query}</h1>
                <p>Results</p>
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