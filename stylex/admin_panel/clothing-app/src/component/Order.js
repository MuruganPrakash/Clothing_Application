import React from 'react';
import './Order.css';

const Order = () => {
    return (
        <div className='orders-display-container'>
            <div className='orders-display-filter'>
                <div className='customername-div'>
                    <input type='text' name='customername' placeholder='Search by Customer Name' />
                </div>
                <select>
                    <option value="" hidden selected>Status</option>
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="cancel">Cancel</option>
                </select>
                <select>
                    <option value="" hidden selected>Order Limits</option>
                    <option value="last1day">Last 1 days orders</option>
                    <option value="last7day">Last 7 days orders</option>
                    <option value="last15day">Last 15 days orders</option>
                    <option value="last30day">Last 30 days orders</option>
                </select>
                <select>
                    <option value="" hidden selected>Method</option>
                    <option value="cash">Cash On Delivery</option>
                    <option value="card">Card</option>
                    <option value="upi">UPI</option>
                </select>
                <div className='datepicker-div'>
                    <div className='startdate-div'>
                        <label htmlFor='start-date'>Start Date</label>
                        <input type='date' name='start-date' />
                    </div>
                    <div className='enddate-div'>
                        <label htmlFor='end-date'>End Date</label>
                        <input type='date' name='end-date' />
                    </div>
                </div>
                <button>Reset</button>
            </div>
            <div className='display-table'>
                <table className='table  table-hover'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Method</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Dhinesh</td>
                            <td>Dhinesh@gmail.com</td>
                            <td>9025654879</td>
                            <td>999</td>
                            <td>Processing</td>
                            <td className='orders-action'>
                                <select>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancel">Cancel</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>002</td>
                            <td>Pradeep</td>
                            <td>prdeep@gmail.com</td>
                            <td>9365654825</td>
                            <td>999</td>
                            <td>Processing</td>
                            <td className='orders-action'>
                                <select>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancel">Cancel</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>003</td>
                            <td>Rajesh</td>
                            <td>Rajesh@gmail.com</td>
                            <td>7895654879</td>
                            <td>999</td>
                            <td>Processing</td>
                            <td className='orders-action'>
                                <select>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancel">Cancel</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Order;