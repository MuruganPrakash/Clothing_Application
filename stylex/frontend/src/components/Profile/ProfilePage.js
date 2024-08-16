import React, { useContext } from 'react';
import {
    Container,
    Card,
    CardContent,
    Button,
    Typography,
    Grid,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Divider,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import OrderIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from '../context/UserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const ProfilePage = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar />
            <Container maxWidth="lg" sx={{ marginTop: '3rem' }}>
                <Card sx={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '15px',
                    padding: '2rem'
                }}>
                    <CardContent>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                                <Avatar sx={{
                                    width: 120,
                                    height: 120,
                                    bgcolor: 'primary.main',
                                    margin: 'auto',
                                    mb: 2
                                }}>
                                    <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
                                </Avatar>
                                <Typography variant="h5" fontWeight="bold">
                                    {user.firstName} {user.lastName}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    {user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<EditIcon />}
                                        sx={{
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            padding: '0.5rem 2rem',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Edit Profile
                                    </Button>
                                </Box>
                                <Divider sx={{ margin: '2rem 0' }} />
                                <Typography variant="h6" gutterBottom>
                                    Recent Orders
                                </Typography>
                                <List>
                                    <ListItem>
                                        <OrderIcon sx={{ marginRight: '1rem', color: 'secondary.main' }} />
                                        <ListItemText
                                            primary="Order #1234"
                                            secondary="Placed on January 1, 2024"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <OrderIcon sx={{ marginRight: '1rem', color: 'secondary.main' }} />
                                        <ListItemText
                                            primary="Order #5678"
                                            secondary="Placed on February 15, 2024"
                                        />
                                    </ListItem>
                                </List>
                                <Divider sx={{ margin: '2rem 0' }} />
                                <Typography variant="h6" gutterBottom>
                                    Account Settings
                                </Typography>
                                <List>
                                    <ListItem>
                                        <AccountIcon sx={{ marginRight: '1rem', color: 'secondary.main' }} />
                                        <ListItemText primary="Update Email" />
                                    </ListItem>
                                    <ListItem>
                                        <AccountIcon sx={{ marginRight: '1rem', color: 'secondary.main' }} />
                                        <ListItemText primary="Change Password" />
                                    </ListItem>
                                </List>
                                <Divider sx={{ margin: '2rem 0' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<LogoutIcon />}
                                        onClick={handleLogout}
                                        sx={{
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            padding: '0.5rem 2rem',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Logout
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default ProfilePage;
