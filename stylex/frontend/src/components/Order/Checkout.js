import React, { useContext, useEffect, useState } from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
    Avatar,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getCartItems } from '../Cart/CartApi';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import { UserContext } from '../context/UserContext';

const items = [
    { name: 'Item 1', quantity: 2, price: 20, image: 'https://via.placeholder.com/50' },
    { name: 'Item 2', quantity: 1, price: 50, image: 'https://via.placeholder.com/50' },
];

const Checkout = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);
    
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

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
                } else {
                    setCartItems([]);
                }
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            } catch (error) {
                console.error('Error loading cart items:', error);
                
            } finally {
                setLoading(false);
            }
        };

        loadCartItems();
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Shipping Details:', shippingDetails);
    };

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
        <NavBar/>
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Checkout
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h6" gutterBottom>
                                    Shipping Details
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={shippingDetails.name}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={shippingDetails.address}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="City"
                                    name="city"
                                    value={shippingDetails.city}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="State"
                                    name="state"
                                    value={shippingDetails.state}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="ZIP Code"
                                    name="zip"
                                    value={shippingDetails.zip}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <TextField
                                    fullWidth
                                    label="Country"
                                    name="country"
                                    value={shippingDetails.country}
                                    onChange={handleChange}
                                    margin="normal"
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '1rem' }}
                                    onClick={()=>{navigate('/payment')}}
                                >
                                    Proceed to Payment
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Order Summary
                            </Typography>
                            <List>
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
                            </List>
                            <Divider style={{ margin: '1rem 0' }} />
                            <Typography variant="h6" align="right">
                                Total: Rs.{totalAmount}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
        </>
    );
};

export default Checkout;