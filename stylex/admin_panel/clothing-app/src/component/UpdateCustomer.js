import React, { useState } from 'react';
import './UpdateCustomer.css';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UpdateCustomer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="update-customer">
      <div className="update-customer-header">
        <h5>
          Update Customer
          <span>Update your necessary information from here</span>
        </h5>
        <Link to="/customers"><Close className='update-customer-header-delete' color='error' /></Link>
      </div>
      <div className="update-customer-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCustomer;