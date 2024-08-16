
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartSize, setCartSize] = useState(0);
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
            // setCartSize(JSON.parse(savedCartItems).length);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartSize(cartItems.length)
    }, [cartItems]);
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setCartSize((prevSize) => prevSize + 1);

    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
        setCartSize((prevSize) => prevSize - 1);
    };
     
    // const cartSize = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartSize }}>
            {children}
        </CartContext.Provider>
    );
};


