import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFavorites } from "../../store/favorites"
import { fetchProducts } from "../../store/product"
import { useMemo } from "react"
import ProductCard from "./ProductCard"
import "./ProductIndexPage.css"

function ProductIndexPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => Object.values(state.products))
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="product-index-main">
            <div className="product-index-container">
                {products.map(product => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductIndexPage

// function ProductIndexPage() {
//     const dispatch = useDispatch();
//     const products = useSelector(state => Object.values(state.products));
//     const sessionUser = useSelector(state => state.session.user);
    

//     useEffect(() => {
//         if(products.length == 0) {
//             dispatch(fetchProducts());
//         }
//         if (sessionUser) {
//             dispatch(fetchFavorites());
//         }
//     }, [dispatch]);
    
//     return (
//       <div className="product-index-main">
//         <div className="product-index-container">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default ProductIndexPage;


// function ProductIndexPage() {
//     const dispatch = useDispatch();
//     const productsObject = useSelector(state => state.products);
//     const sessionUser = useSelector(state => state.session.user);
//     const products = useMemo(() => Object.values(productsObject), [productsObject]);
  
//     useEffect(() => {
//       dispatch(fetchProducts());
//       if (sessionUser) {
//         dispatch(fetchFavorites());
//       }
//     }, [dispatch, sessionUser]);
  
//     if (!products.length) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div className="product-index-main">
//         <div className="product-index-container">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default ProductIndexPage;
  
// function ProductIndexPage() {
//     const dispatch = useDispatch();
//     const products = useSelector(state => Object.values(state.products));
//     const sessionUser = useSelector(state => state.session.user);
  
//     useEffect(() => {
//       const fetchProductsAndFavorites = async () => {
//         await dispatch(fetchProducts());
//         if (sessionUser) {
//           await dispatch(fetchFavorites());
//         }
//       };
  
//       fetchProductsAndFavorites();
//     }, [dispatch, sessionUser, fetchProducts, fetchFavorites]);
  
//     if (!products.length) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div className="product-index-main">
//         <div className="product-index-container">
//           {products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default ProductIndexPage;
  