import React from 'react';
import './sideNavBar.css';
import Logo from '../images/Web_Logo.png';
import GridView from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customers from './Customers';
import AddProduct from './AddProduct';

import TopNavbar from './topnavbar';

const SideNavbar = () => {
  return (
      <>   
        <TopNavbar/>
        <div className="admin-sidebar d-flex flex-column p-3">
          <div className='sidebar-header'>
            <ShoppingCartCheckoutOutlinedIcon/>
            <img src={Logo} className='web_logo'/>
          </div>
          <div className='sidebar-item'>
              <GridView/>
              <a href="/dashboard" className='mb-2'>Dashboard</a>
          </div>
          <div className='sidebar-item'>
              <PersonOutlineIcon/> 
              <a href="/customers" >Customers</a>
          </div>
          <div className='sidebar-item'>
              <ShoppingCartOutlinedIcon/> 
              <a href="/orders" >Orders</a>
          </div>
          <div className='sidebar-item'>
              <AddShoppingCartOutlined/>
              <a href="/addproduct" >Add Products</a>
          </div>
          <div className='sidebar-footer'>
            <button><LogoutOutlinedIcon className='logout-icon'/>Log Out</button>
          </div>
        </div>
      </>
  );
};

export default SideNavbar;
