import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import './Dashboard.css';
import ChartComponent from './LineChart';



const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboard-header'>
                <div className='dashboard-header-items'>
                    <div className='dashboard-header-icon' style={{ backgroundColor: '#FFDEAD', color: '#CC5500' }}>
                        <ShoppingCartOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='dashboard-header-content'>
                        <p>Total Orders</p>
                        <h3>210</h3>
                    </div>
                </div>
                <div className='dashboard-header-items'>
                    <div className='dashboard-header-icon' style={{ backgroundColor: '#F0F8FF', color: '#0096FF' }}>
                        <CachedIcon fontSize='medium' />
                    </div>
                    <div className='dashboard-header-content'>
                        <p>Orders Pending</p>
                        <h3>55</h3>
                    </div>
                </div>
                <div className='dashboard-header-items'>
                    <div className='dashboard-header-icon' style={{ backgroundColor: '#D0F0C0', color: '#03C03C' }}>
                        <LocalShippingOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='dashboard-header-content'>
                        <p>Orders Processing</p>
                        <h3>100</h3>
                    </div>
                </div>
                <div className='dashboard-header-items'>
                    <div className='dashboard-header-icon' style={{ backgroundColor: '#ACE1AF', color: '#1B4D3E' }}>
                        <DoneOutlinedIcon fontSize='medium' />
                    </div>
                    <div className='dashboard-header-content'>
                        <p>Orders Delivered</p>
                        <h3>210</h3>
                    </div>
                </div>
            </div>
            <div className='dashboard-chart-div'>
                <div className='weekly-analysis'>
                    <ChartComponent/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;