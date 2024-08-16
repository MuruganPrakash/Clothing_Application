
import React, { useContext, useEffect, useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    IconButton,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ProductPage.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../Navbar/Navbar';
import { addToCart } from '../Cart/CartApi';
import { UserContext } from '../context/UserContext';
import { addToFavorites,removeFromFavorites } from '../Cart/CartApi';
const ProductPage = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [favorite, setFavorite] = useState(false);
    const [showSizeChart, setShowSizeChart] = useState(false);
    const { user } = useContext(UserContext);
    const productsize = {
        sizes: ['S', 'M', 'L', 'XL'],
        sizeChart: `| Size | Chest (in) | Waist (in)|
|------|------------|-----------|
| S    | 34-36      | 28-30     |
| M    | 38-40      | 32-34     |
| L    | 42-44      | 36-38     |
| XL   | 46-48      | 40-42     |`,
    };
    const handleAddToCart = () =>{
        
        if (user && user.id) {
            addToCart(user.id, product.id, selectedSize, quantity);
        } else {
            alert("Please log in to add items to your cart.");
           
        }
    }
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/getProducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchProducts();
    }, []);

    const product = products.find(p => p.id === parseInt(productId));

    const handleSizeChange = (size) => {
        setSelectedSize((prevSize) => (prevSize === size ? '' : size));
    };

    const toggleFavorite = () => {
        if(user && user.id)
        {
            setFavorite(!favorite);
            if (favorite) {
                removeFromFavorites(user.id, product.id);
            }
            else {
                addToFavorites(user.id, product.id);
            }
        }
        else
        {
            alert("Please log in to add items to your favorites.");
        }
        
    };

    const increaseQuantity = () => {

        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleSizeChartOpen = () => {
        setShowSizeChart(true);
    };

    const handleSizeChartClose = () => {
        setShowSizeChart(false);
    };

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (!product) {
        return <Typography>Product not found</Typography>;
    }

    return (
        <>
        <NavBar/>
        <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} className='productimage'>
                    <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                {product.brand}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" gutterBottom>
                                Rs.{product.price}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {product.description}
                            </Typography>

                            <Divider style={{ margin: '1rem 0' }} />
                            <Typography variant="body2" gutterBottom>
                                Select Size:
                                <IconButton
                                    onClick={handleSizeChartOpen}
                                    style={{ fontSize: '13px', marginLeft: '20rem', color: 'black' }}
                                >
                                    Size Chart
                                </IconButton>
                            </Typography>
                            <Grid container spacing={2} style={{ marginBottom: '1rem' }}>
                                {productsize.sizes.map((size) => (
                                    <Grid item key={size}>
                                        <Button
                                            variant={selectedSize === size ? 'contained' : 'outlined'}
                                            color="primary"
                                            onClick={() => handleSizeChange(size)}
                                        >
                                            {size}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <Typography variant="body2" gutterBottom>
                                        Quantity:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={decreaseQuantity} disabled={quantity <= 1}>
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">{quantity}</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={increaseQuantity}>
                                        <AddIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                onClick={handleAddToCart}
                                disabled={!selectedSize}
                            >
                                Add to Cart
                            </Button>
                            <IconButton
                                onClick={toggleFavorite}
                                style={{ marginTop: '1rem', float: 'right' }}
                            >
                                {favorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                            </IconButton>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Dialog
                open={showSizeChart}
                onClose={handleSizeChartClose}
                aria-labelledby="size-chart-dialog"
            >
                <DialogTitle id="size-chart-dialog">Size Chart</DialogTitle>
                <DialogContent>
                    <Typography variant="body2">
                        <pre>{productsize.sizeChart}</pre>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSizeChartClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        </>
    );
};

export default ProductPage;
