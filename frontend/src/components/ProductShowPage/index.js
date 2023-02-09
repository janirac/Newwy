import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/product";

function ProductShowPage() {
    const dispatch = useDispatch()
    const { productId } = useParams()

    const sessionUser = useSelector(state => state.session.user)
    const product = useSelector(state => state.products[productId])

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId, dispatch])

    if(!product) {
        return null
    }

    return (
        <div>
            {product.name}
            {"----"}
            {product.price}
            {"----"}
            {product.description}
            {"----"}
            {product.amount}
            {"----"}
            {product.category}
            {"----"}
            {product.color}
            {"----"}
            {product.condition}
            {"----"}
            {product.brand}
            {"----"}
            {product.size}
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default ProductShowPage