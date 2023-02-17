import './ProductSlider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductIndexPage/ProductCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product';
import { useEffect } from "react"
import { fetchFavorites } from '../../store/favorites';
import { NavLink } from 'react-router-dom';

function ProductSlider() { 

    const dispatch = useDispatch()
    const products = useSelector(state => Object.values(state.products))
    const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector(state => Object.values(state.favorites));

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchFavorites())
        // if (favorites.length == 0) {
            // dispatch(fetchFavorites())
        // }
    }, [])

    // // useEffect(() => {
    //     // dispatch(fetchProducts())
    //     // if (favorites.length == 0) {
    //         // dispatch(fetchFavorites())
    //     // }
    // }, [favorites])
    // if (favorites.length == 0) {
    //     dispatch(fetchFavorites())
    // }
    // dispatch(fetchFavorites())

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        }
    };
    
    
    const productCards = products.map(product => (
        <NavLink className='product-card-link' to={`/products/${product.id}`}>
            <ProductCard product={product} key={product.id} />
        </NavLink>
    ))

    const hotStuffProducts = products.map((product) => {
        if(product.categories[0].indexOf(21) > -1){
            return (
                <NavLink className='product-card-link' to={`/products/${product.id}`}>
                    <ProductCard product={product} key={product.id} />
                </NavLink>
            )
        }
    })

    const trendingProducts = products.map((product) => {
        if(product.categories[0].indexOf(23) > -1){
            return (
                <NavLink className='product-card-link' to={`/products/${product.id}`}>
                    <ProductCard product={product} key={product.id} />
                </NavLink>
            )
        }
    })

    const eventsProducts = products.map((product) => {
        if(product.categories[0].indexOf(22) > -1){
            return (
                <NavLink className='product-card-link' to={`/products/${product.id}`}>
                    <ProductCard product={product} key={product.id} />
                </NavLink>
            )
        }
    })

    return (
        <div>
            <div className='category-section'>
                <div className='space'>
                    
                </div>
                <div className='category-text-container'>
                    <div>
                        <h2 className='category-text'>Hot Stuff</h2>
                    </div>
                    <div>
                        <h3 className='category-sub-text'>Spring break incoming!</h3>
                    </div>
                </div>
                <NavLink className='view-all-link' to='/hotstuff'>
                    <div className='view-all-link'>
                        <h3>view all</h3>
                    </div>
                </NavLink>
            </div>
            <div className='carousel-main'>
        
                <Carousel className='multiple-product-carousel' responsive={responsive} slidesToSlide={2}>
                    {hotStuffProducts}
                </Carousel>;
            </div>
            <div className='category-section'>
                <div>
                    
                </div>
                <div className='category-text-container'>
                    <div>
                        <h2 className='category-text'>Events + Occasions</h2>
                    </div>
                    <div>
                        <h3 className='category-sub-text'>Fancy fancy</h3>
                    </div>
                </div>
                <NavLink className='view-all-link' to="/eventsoccasions">
                    <div className='view-all-link'>
                        <h3>view all</h3>
                    </div>
                </NavLink>
            </div>
            <div className='carousel-main'>
                <Carousel className='multiple-product-carousel' responsive={responsive} slidesToSlide={2}>
                    {eventsProducts}
                </Carousel>;
            </div>
            <div className='category-section'>
                <div>
                    
                </div>
                <div className='category-text-container'>
                    <div>
                        <h2 className='category-text'>What's Trending</h2>
                    </div>
                    <div>
                        <h3 className='category-sub-text'>Across Nuuly Thrift</h3>
                    </div>
                </div>
                <NavLink className='view-all-link' to="/trending" >
                    <div className='view-all-link'>
                        <h3>view all</h3>
                    </div>
                </NavLink>
            </div>
            <div className='carousel-main'>
                <Carousel className='multiple-product-carousel' responsive={responsive} slidesToSlide={2}>
                    {trendingProducts}
                </Carousel>;
            </div>
        </div>
    )

}

export default ProductSlider;