import React from 'react';
import Header from '../Header/Header';
import './ThankYou.css'

const ThankYou = () => {
    return (
        <div className='thanks-page'>
           <div className="container">
           <Header></Header>
            <div>
                <h2>Thank You for Order</h2>
            </div>
           </div>
        </div>
    );
};

export default ThankYou;