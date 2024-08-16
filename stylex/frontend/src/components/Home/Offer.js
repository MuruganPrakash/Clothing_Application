import React from 'react';
import './Offer.css';


const Offer = () => {
    return (
        <div className='offer-card-container'>
            <div className="offer-card">
                <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-boysteesshirts-starting249.avif' className="offer-card-image" />
            </div>
            <div className="offer-card">
                <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-dresses-starting499.avif' className="offer-card-image" />
            </div>
            <div className="offer-card">
                <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-kurtas&kurtis-starting499.avif' className="offer-card-image" />
            </div>
            <div className="offer-card">
                <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-tops-starting199.avif' className="offer-card-image" />
            </div>
            <div className="offer-card">
                <a href='/category/trouser'>
                    <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-trousers-starting699.avif' className="offer-card-image" />
                </a>
            </div>
            <div className="offer-card">
                <a href='/category/tshirt'>
                    <img src='images\D-21072024-TrendsSIS-BagTheClosetBasics-tshirts-starting199.avif' className="offer-card-image" />
                </a>
            </div>
        </div>
    );
};

export default Offer;