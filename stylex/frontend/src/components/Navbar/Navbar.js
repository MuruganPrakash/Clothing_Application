import React, { useContext, useState } from 'react'
import './Navbar.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const { cartSize } = useContext(CartContext);
    
    const [wishlistCount, setWishlistCount] = useState(3);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    

    const handleSearchChange = async (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 1) {
            try {
                const response = await fetch(`http://localhost:8080/suggestions?q=${value}`);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        setSuggestions(data);
                    } else {
                        setSuggestions([]);
                        console.error('Unexpected data format:', data);
                    }
                } else {
                    setSuggestions([]);
                    console.error('Error fetching search suggestions:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching search suggestions:', error);
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setSearchTerm('');
        setSuggestions([]);
        navigate(`/category/${suggestion}`);
    };
    
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (query.trim() !== '') {
            try {
                const response = await fetch(`http://localhost:8080/search?query=${query}`);
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    };


    return (
        <div className="navbar">
            <div className='logo'>
                <a href="/">
                    {/* <img src="images\styleximage.png" alt="logo"/> */}
                    <img src={`${process.env.PUBLIC_URL}/images/styleximage.png`} alt="logo" />

                </a>
            </div>
            <a href="/">Home</a>
            <div className="dropdown">
                <a href="#men">Men</a>
                <div className="dropdown-container">
                    <div className='dropdown-box'>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">WESTERN WEAR</h5>
                            <a href='/category/jacket'>Jackets & Coats</a>
                            <a href='/category/jeans'>Jeans</a>
                            <a href='/category/shirt'>Shirts</a>
                            <a href='/category/shorts'>Shorts & 3/4ths</a>
                            <a href='/category/sweatshirt'>Sweatshirts & Hoodies</a>
                            <a href='/category/trouser'>Trousers & Pants</a>
                            <a href='/category/tshirt'>T-Shirts</a>
                            <h5 className="contentTitle">Party Wear</h5>
                            <a href='/category/suits'>Formal Suits</a>
                            <a href='/category/partyshirt'>Party Shirts</a>
                            <a href='/category/sherwani'>Sherwani</a>
                            <a href='/category/kurtas'>Kurtas</a>
                            <a href='/category/printedshirt'>Printed Shirts</a>
                            
                        </div>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">INTERNATIONAL BRANDS</h5>
                            <a href='#'>Super Dry</a>
                            <a href='#'>Levis</a>
                            <a href='#'>Peter England</a>
                            <a href='#'>Indian Terrain</a>
                            <a href='#'>John Players</a>
                            <a href='#'>DNMX</a>
                            <a href='#'>Tommy hilfiger</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <a href="#men">Women</a>
                <div className="dropdown-container">
                    <div className='dropdown-box'>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">ETHNIC WEAR</h5>
                            <a href='/category/womenkurtas'>Kurtas</a>
                            <a href='/category/chudidars'>Salwars & Churidars</a>
                            <a href='/category/saree'>Sarees</a>
                            <a href='/category/dupatta'>Dupattas</a>
                            <a href='/category/blouses'>Blouses</a>
                            <a href='/category/leggings'>Leggings</a>
                            <a href='/category/skirts'>Skirts</a>
                            <a href='/category/shawls'>Shawls & Wraps</a>
                            <h5 className="contentTitle">WESTERN WEAR</h5>
                            <a href='/category/tops'>Tops</a>
                            <a href='#'>Jeans & Jeggings</a>
                            <a href='#'>Shirts</a>
                            <a href='#'>Sweatshirts & Hoodies</a>
                            <a href='#'>Track Pants</a>
                            <a href='#'>T-Shirts</a>
                        </div>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">INTERNATIONAL BRANDS</h5>
                            <a href='#'>H&M </a>
                            <a href='#'>Tommy hilfiger</a>
                            <a href='#'>Kanchivaram</a>
                            <a href='#'>DNMX</a>
                            <a href='#'>Lee Cooper</a>
                            <a href='#'>Shereens</a>
                            <a href='#'>Spykar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <a href="#evolve">Evolve</a>
                <div className="dropdown-container">
                    <div className='dropdown-box'>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">UNISEX WEAR</h5>
                            <a href='#'>Jeans & Jeggings</a>
                            <a href='#'>Shirts</a>
                            <a href='#'>Sweatshirts & Hoodies</a>
                            <a href='#'>Track Pants</a>
                            <a href='#'>T-Shirts</a>
                            <a href='#'>Pant</a>
                            
                        </div>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">INTERNATIONAL BRANDS</h5>
                            <a href='#'>H&M </a>
                            <a href='#'>Tommy hilfiger</a>
                            <a href='#'>DNMX</a>
                            <a href='#'>Levis</a>   
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <a href="#men">Kids</a>
                <div className="dropdown-container">
                    <div className='dropdown-box'>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">Boys Clothing</h5>
                            <a href='#'>T-Shirts</a>
                            <a href='#'>Shirts</a>
                            <a href='#'>Shorts</a>
                            <a href='#'>Jeans</a>
                            <a href='#'>Trousers</a>
                            <a href='#'>Clothing Sets</a>
                            <a href='#'>Ethnic Wear</a>
                            <a href='#'>Track Pants & Pyjamas</a>
                            <a href='#'>Jacket, Sweater & Sweatshirts</a>
                            <a href='#'>Party Wear</a>
                            <a href='#'>Nightwear & Loungewear</a>
                        </div>
                        <div className="dropdown-content">
                            <h5 className="contentTitle">Girls Clothing</h5>
                            <a href='#'>Dresses</a>
                            <a href='#'>Tops</a>
                            <a href='#'>Tshirts</a>
                            <a href='#'>Kurta Sets</a>
                            <a href='#'>Party wear</a>
                            <a href='#'>Jeans, Trousers & Capris</a>
                            <a href='#'>Jacket, Sweater & Sweatshirts</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <input type="text" className="search-input" value={searchTerm} onChange={handleSearchChange} placeholder="Search products,brands and more...." />
                <div className='search-items'>
                    {suggestions.length > 0 && (
                        <ul className="navbar-suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            
            
            {user ? (
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                        <MenuItem onClick={logout}>Log Out</MenuItem>
                    </Menu>
                </div> 
            ) : (
                <Link to="/login">Login</Link>
            )}
            <div className="wishlist-icon">
                <FontAwesomeIcon onClick={()=>{navigate('/wishlist')}} icon={faHeart} />
                {/* {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>} */}
            </div>
            <div className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} onClick={()=>{navigate('/cart')}}/>
                {cartSize > 0 && <span className="cart-badge"></span>}
            </div>

           
        </div>
    )
}

export default NavBar;