import './ProductSlider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../ProductIndexPage/ProductCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product';
import { useEffect } from "react"

function ProductSlider() { 

    const dispatch = useDispatch()
    const products = useSelector(state => Object.values(state.products))

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        }
    };

    const productCards = products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))

    //   console.log(productCards)
    //   console.log(';;;;;;;;')

    return (
        <div>
            <div className='carousel-main'>
            <h2>Category Name</h2>
                <Carousel responsive={responsive} slidesToSlide={2}>
                    {productCards}
                </Carousel>;
            </div>
            <div className='carousel-main'>
            <h2>Category Name</h2>
                <Carousel responsive={responsive} slidesToSlide={2}>
                    {productCards}
                </Carousel>;
            </div>
            <div className='carousel-main'>
            <h2>Category Name</h2>
                <Carousel responsive={responsive} slidesToSlide={2}>
                    {productCards}
                </Carousel>;
            </div>
        </div>
    )

}

export default ProductSlider;