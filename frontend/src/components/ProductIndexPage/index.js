import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../../store/product"
import ProductCard from "./ProductCard"
import "./ProductIndexPage.css"

function ProductIndexPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => Object.values(state.products))

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            {products.map(product => (
                <ProductCard product={product}/>
            ))}
        </div>
    )
}

export default ProductIndexPage