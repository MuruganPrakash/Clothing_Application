
import axios from 'axios';


export const getCartItems = (userId) => {
    return axios.get(`http://localhost:8080/getCart/${userId}`);
};

export const getFavorites = (userId) => {
    return axios.get(`http://localhost:8080/getFavorite/${userId}`);
};

export const addToCart = (userId, productId, size,quantity) => {
    alert("Item(s) added to your bag");
    return axios.post(`http://localhost:8080/addCart`, null, {
        params: { userId, productId, size,quantity}
        
    });
    
};

export const addToFavorites = (userId, productId) => {
    return axios.post(`http://localhost:8080/addFavorite`, null, {
        params: { userId, productId}
        
    });
    
};



export const removeFromCart = async (userId, productId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/removeCart`, {
            
            params: { userId, productId }
        });
        return response;
    } catch (error) {
        console.error('Error removing from cart:', error);
        throw error;
    }
};

export const removeFromFavorites = async (userId, productId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/removeFavorite`, {
            
            params: { userId, productId }
        });
        return response;
    } catch (error) {
        console.error('Error removing from Favorite:', error);
        throw error;
    }
};


export const updateCartItem = async (userId, productId, updatedItem) => {
    try {
        const response = await axios.put(`http://localhost:8080/updateCart`, updatedItem, {
            params: { userId, productId }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};