
import React, { useEffect, useState } from 'react';
import './Customer.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';




const Customers = () => {
  const [customers, setcustomers] = useState([]);
  useEffect(() => {
    const loadCustomers = async () => {
      const response = await fetch('http://localhost:8080/getCustomers');
      const data = await response.json();
      setcustomers(data);

    }
    loadCustomers();

  }, [])
  const deleteCustomer = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/deleteCustomer/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        setcustomers(customers.filter(customer => customer.id !== id));
        console.log(`Customer with id ${id} was successfully deleted.`);
      } else {
        console.error('Failed to delete the customer.');
      }
    } catch (error) {
      console.error('An error occurred while deleting the customer:', error);
    }
  };
  return ( 
    <div className='admin-customer-display'>
        <div className='admin-search-bar-div'>
            <input type="search" placeholder="Search by Name / Email / Contact number...." className='admin-search-bar' />
            <button className="admin-search-button"><SearchOutlinedIcon/> Search</button>
        </div>
        <div className='display-table'>
            <table className='table  table-hover'>
          <thead className='thead-light'>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Phone Number</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, index) => (
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.email}</td>
                  {/* <td>9025654879</td> */}
                  <td style={{
                    
                    paddingLeft: '30px'
                  }}>
                    
                    <DeleteOutlineIcon style={{ cursor: 'pointer' }} onClick={() => deleteCustomer(customer.id)} />
                  </td>
                </tr>
              ))
            }



          </tbody>
            </table>
        </div>
    </div>
  )
}

export default Customers
