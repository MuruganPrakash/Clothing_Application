import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Customers from './component/Customers';
import AddProduct from './component/AddProduct';
import SideNavbar from './component/sideNavbav'
import UpdateCustomer from './component/UpdateCustomer';
import Order from './component/Order';
import Dashboard from './component/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
          <SideNavbar />
          <Routes> 
              <Route path="customers" element={<Customers />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="updateCustomer" element={<UpdateCustomer/>}/>
              <Route path="orders" element={<Order/>}/>
              <Route path="dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
