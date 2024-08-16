// import React, { useContext, useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// import './OrderConfirmation.css';
// import NavBar from '../Navbar/Navbar';
// import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';
// import { getCartItems } from '../Cart/CartApi';
// import { Avatar, ListItem, ListItemText, Typography } from '@mui/material';
// import axios from 'axios';


// const OrderConfirmation = () => {
//     const navigate = useNavigate();
//     const [cartItems, setCartItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { user } = useContext(UserContext);

//     const [orderDetails, setOrderDetails] = useState({
//         orderId: '',
//         orderPlacedDate: new Date(), 
//         deliveryDate: ''
//     });

//     useEffect(() => {
//         const generateOrderId = () => {
//             return Math.floor(100000 + Math.random() * 900000); 
//         };

//         const calculateDeliveryDate = () => {
//             const placedDate = new Date(orderDetails.orderPlacedDate);
//             placedDate.setDate(placedDate.getDate() + 4); 
//             return placedDate.toDateString(); 
//         };

        
//         setOrderDetails(prevDetails => ({
//             ...prevDetails,
//             deliveryDate: calculateDeliveryDate(),
//             orderId: generateOrderId()
//         }));
//     }, []);

//     useEffect(() => {
//         if (!user || !user.id) {
//             console.error('User is not logged in or user ID is missing');
//             setLoading(false);
//             return;
//         }

//         const loadCartItems = async () => {
//             try {
//                 const response = await getCartItems(user.id);
//                 if (response.data && Array.isArray(response.data)) {
//                     setCartItems(response.data);
//                 } else {
//                     setCartItems([]);
//                 }
//                 localStorage.setItem('cartItems', JSON.stringify(cartItems));
//             } catch (error) {
//                 console.error('Error loading cart items:', error);

//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCartItems();
//     }, [user]);
//     useEffect(() => {
//         const saveOrder = async () => {
//             try {
//                 await axios.post('/addOrder', {
//                     id: orderDetails.orderId,
//                     name: user.firstName,
//                     email: user.email,
//                     amount: cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
//                 });
//             } catch (error) {
//                 console.error('Error saving order:', error);
//             }
//         };

//         if (!loading && cartItems.length > 0) saveOrder();
//     }, [loading, cartItems, orderDetails, user]);
    
//     const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
//     if (loading) {
//         return (
//             <div>
//                 <NavBar />
//                 <h1 style={{ textAlign: 'center' }}>Loading...</h1>
//             </div>
//         );
//     }

    
//     return (
//         <>
//         <NavBar/>
//         <div className="order-confirmation">
//             <h1>Thank You for Your Purchase!</h1>
//             <p>Your order has been successfully placed.</p>
//             <div className="order-summary">
//                 <h2>Order Summary</h2>
//                     <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
//                 <p><strong>Name:</strong> {user.firstName}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                 <div className="items">
//                     <h3>Items Purchased:</h3>
//                     <ul>
//                             {cartItems.map((item, index) => (
//                                 <ListItem key={index}>
//                                     <Avatar src={item.product.image} style={{ marginRight: '1rem' }} />
//                                     <ListItemText
//                                         primary={`${item.quantity} x ${item.product.type}`}
//                                         secondary={`Rs ${item.product.price} each`}
//                                     />
//                                     <Typography variant="body2">
//                                         Rs.{item.quantity * item.product.price}
//                                     </Typography>
//                                 </ListItem>
//                             ))}
//                     </ul>
//                 </div>
//                 <p><strong>Total Amount:</strong> Rs.{totalAmount}</p>
//                 <p><strong>Expected Delivery Date:</strong> {orderDetails.deliveryDate}</p>
//             </div>
//             {/* <Link to="/shop" className="btn">Continue Shopping</Link> */}
//         </div>
//         </>
//     );
// };

// export default OrderConfirmation;




import React, { useContext, useEffect, useState } from 'react';
import './OrderConfirmation.css';
import NavBar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { getCartItems } from '../Cart/CartApi';
import { Avatar, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const OrderConfirmation = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    const [orderDetails, setOrderDetails] = useState({
        orderId: '',
        orderPlacedDate: new Date(),
        deliveryDate: ''
    });

    useEffect(() => {
        const generateOrderId = () => Math.floor(100000 + Math.random() * 900000);

        const calculateDeliveryDate = () => {
            const placedDate = new Date(orderDetails.orderPlacedDate);
            placedDate.setDate(placedDate.getDate() + 4);
            return placedDate.toDateString();
        };

        setOrderDetails(prevDetails => ({
            ...prevDetails,
            deliveryDate: calculateDeliveryDate(),
            orderId: generateOrderId()
        }));
    }, []);

    useEffect(() => {
        if (!user || !user.id) {
            console.error('User is not logged in or user ID is missing');
            setLoading(false);
            
            return;
        }

        const loadCartItems = async () => {
            try {
                const response = await getCartItems(user.id);
                if (response.data && Array.isArray(response.data)) {
                    setCartItems(response.data);
                    localStorage.setItem('cartItems', JSON.stringify(response.data));
                } else {
                    setCartItems([]);
                }
            } catch (error) {
                console.error('Error loading cart items:', error);
            } finally {
                setLoading(false);
            }
        };

        loadCartItems();
    }, [user, navigate]);

    useEffect(() => {
        const saveOrder = async () => {
            try {
                await axios.post('http://localhost:8080/addOrder', {
                    id: orderDetails.orderId,
                    name: user.firstName,
                    email: user.email,
                    amount: cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0)
                });
            } catch (error) {
                console.error('Error saving order:', error);
            }
        };

        if (!loading && cartItems.length > 0) saveOrder();
    }, [loading, cartItems, orderDetails, user]);

    const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

    if (loading) {
        return (
            <div>
                <NavBar />
                <h1 style={{ textAlign: 'center' }}>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className="order-confirmation">
                <h1>Thank You for Your Purchase!</h1>
                <p>Your order has been successfully placed.</p>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
                    <p><strong>Name:</strong> {user.firstName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <div className="items">
                        <h3>Items Purchased:</h3>
                        <ul>
                            {cartItems.map((item, index) => (
                                <ListItem key={index}>
                                    <Avatar src={item.product.image} style={{ marginRight: '1rem' }} />
                                    <ListItemText
                                        primary={`${item.quantity} x ${item.product.type}`}
                                        secondary={`Rs ${item.product.price} each`}
                                    />
                                    <Typography variant="body2">
                                        Rs.{item.quantity * item.product.price}
                                    </Typography>
                                </ListItem>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Total Amount:</strong> Rs.{totalAmount}</p>
                    <p><strong>Expected Delivery Date:</strong> {orderDetails.deliveryDate}</p>
                </div>
            </div>
        </>
    );
};

export default OrderConfirmation;
