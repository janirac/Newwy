import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavorite, fetchFavorites } from '../../store/favorites'
import { NavLink } from 'react-router-dom'
import { checklistIcon, settingsIcon } from '../Navigation'
import ProductCard from '../ProductIndexPage/ProductCard'

import './Favorites.css'
import FavoriteCard from './FavoritesCard'
import { fetchProducts, getProduct } from '../../store/product'

function Favorites() {
  const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector(state => Object.values(state.favorites));
    const products = useSelector(state => (state.products))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchFavorites())
        dispatch(fetchProducts())
    }, [])

    const productIds = favorites.map(favorite => (
        favorite.productId
    ))

    const prods = productIds.map(productId => (
        products[productId]
    ))
    
    return (
    <div className='favorites-main'>
        <div className='profile-page-user-links'>
            <div className='profile-btn-main'>
                    <NavLink className='profile-btn-main-link' to='/profile'>
                    <button className='profile-btn-home'>
                        <img className='img-dropdown' src="https://i.ibb.co/GVw3f6F/silk-reine-inline.png"/> 
                        <div className='profile-btn-view'>
                        <h4 className='profile-name'>{sessionUser.email}</h4>
                        </div>
                    </button>
                    </NavLink>
            </div>
            <div className='orders-btn-main'>
                <NavLink className='orders-btn-main-link' to="/">
                  <button className='orders-btn'>
                    {checklistIcon}
                    <text className='orders-text'>Orders</text>
                  </button>
                </NavLink>
              </div>
              <div className='settings-btn-main'>
                <NavLink to='/'>
                  <button className='settings-btn'>
                    {settingsIcon}
                    <text className='settings-text'>Settings</text>
                  </button>
                </NavLink>
            </div>
        </div>
        <div className='profile-info'>
            <div className='likes-shop'>
                <div className='likes-link'></div>
            </div>
            <div className='user-profile'>
                <img src="https://i.ibb.co/GVw3f6F/silk-reine-inline.png" alt="silk-reine-inline" className='pic-for-profile'/>
                <div className='username-profile'>{sessionUser.email}</div>
            </div>
            <div className='favorite-product-card-container'>
                {prods.map(prod => (
                    <ProductCard product={prod}/>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Favorites
 
  
  
  
  
  