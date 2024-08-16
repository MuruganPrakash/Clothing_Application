import React, { useContext, useEffect, useState } from 'react';
import './Wishlist.css';

import NavBar from '../Navbar/Navbar';
import { UserContext } from '../context/UserContext';
import { getFavorites,removeFromFavorites } from './CartApi';

const Wishlist = () => {
    const [favoriteItems, setFavoriteItems] = useState([]);
    const {user} = useContext(UserContext);
    const [loading,setLoading] = useState('true');
    const handleRemoveItem = (id,productId) => {
        const updatedItems = favoriteItems.filter(item => item.id !== id);
        setFavoriteItems(updatedItems);
        removeFromFavorites(user.id,productId);
    };

    useEffect(()=>{
        if(!user || !user.id)
        {
            console.error('User is not logged in or user ID is missing');
            setLoading(false);
            return;
        }

        const loadFavoriteItems = async()=>{
            try
            {
                const response = await getFavorites(user.id);
                if(response.data && Array.isArray(response.data))
                {
                    setFavoriteItems(response.data);

                }
                else
                {
                    setFavoriteItems([]);
                }
                localStorage.setItem('favoriteItems',JSON.stringify(favoriteItems));
            }
            catch(error)
            {
                console.log('Error loading favorite Items');
            }
            finally
            {
                setLoading(false);
            }
        }
        loadFavoriteItems();

    },[user])
    useEffect(() => {
        if (favoriteItems.length > 0) {
            localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        } else {
            localStorage.removeItem('favoriteItems');
        }
    }, [favoriteItems]);

    return (
        <>
        <NavBar/>
        <div className="wishlist">
            <h1>Your Wishlist</h1>
            <div className="wishlist-items">
                {favoriteItems.length > 0 ? (
                    favoriteItems.map((item) => (
                        <div key={item.id} className="wishlist-item">
                            <div className="wishlist-item-card">
                                <img src={item.product.image} alt={item.product.brand} className="wishlist-item-image" />
                                <div className="wishlist-item-details">
                                    <p className="wishlist-item-name">{item.product.name}</p>
                                    <p className="wishlist-item-price">Rs.{item.product.price}</p>
                                    <button className="btn-remove" onClick={() => handleRemoveItem(item.id,item.product.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="empty-message">Your wishlist is empty.</p>
                )}
            </div>
        </div>
        </>
    );
};

export default Wishlist;