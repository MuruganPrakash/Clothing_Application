import React, { useState } from 'react';
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Divider,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel,
} from '@mui/material';
import NavBar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const items = [
    { id: 1, name: 'T-shirt', price: 200, quantity: 2, size: 'M', image: 'https://assets.ajio.com/medias/sys_master/root/20240716/rqSD/6696b1091d763220fac8d9a6/-473Wx593H-467319885-black-MODEL.jpg' },
    { id: 2, name: 'Jeans', price: 400, quantity: 1, size: 'L', image: 'https://assets.ajio.com/medias/sys_master/root/20240503/jIDt/6634f6e805ac7d77bb3bf4e0/-473Wx593H-443043168-blue-MODEL2.jpg' },
    { id: 3, name: 'shirt', price: 600, quantity: 1, size: 'S', image: 'https://assets.ajio.com/medias/sys_master/root/20230808/9x9d/64d2474aeebac147fcb45b0a/-473Wx593H-466434087-white-MODEL.jpg' }
];

const PaymentPage = () => {
    const [paymentMode, setPaymentMode] = useState('credit_card');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [upiId, setUpiId] = useState('');

    const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const navigate = useNavigate();
    const handlePaymentModeChange = (e) => {
        setPaymentMode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/orderconfirmation')
        console.log('Payment Details:', {
            paymentMode,
            cardNumber,
            expirationDate,
            cvv,
            upiId,
        });
    };

    return (
        <>
        <NavBar/>
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Payment Information
                            </Typography>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Choose Payment Method</FormLabel>
                                <RadioGroup
                                    aria-label="payment-method"
                                    name="payment-method"
                                    value={paymentMode}
                                    onChange={handlePaymentModeChange}
                                >
                                    <FormControlLabel value="credit_card" control={<Radio />} label="Credit / Debit Card" />
                                    <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
                                    <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                                </RadioGroup>
                            </FormControl>
                            {paymentMode === 'credit_card' && (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label="Card Number"
                                        value={cardNumber}
                                        onChange={(e) => setCardNumber(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        label="Expiration Date (MM/YY)"
                                        value={expirationDate}
                                        onChange={(e) => setExpirationDate(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        fullWidth
                                        label="CVV"
                                        type="password"
                                        value={cvv}
                                        onChange={(e) => setCvv(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </form>
                            )}
                            {paymentMode === 'upi' && (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label="UPI ID"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                </form>
                            )}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                style={{ marginTop: '1rem' }}
                                onClick={handleSubmit}
                                disabled={!paymentMode}
                            >
                                Confirm Payment
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Order Summary
                            </Typography>
                            <Divider style={{ margin: '1rem 0' }} />
                            {items.map((item, index) => (
                                <Grid container spacing={2} alignItems="center" key={index}>
                                    <Grid item>
                                        <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="body1">
                                            {item.quantity} x {item.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1">
                                            Rs.{item.quantity * item.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))}
                            <Divider style={{ margin: '1rem 0' }} />
                            <Typography variant="h6" align="right">
                                Total: Rs.{totalAmount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default PaymentPage;