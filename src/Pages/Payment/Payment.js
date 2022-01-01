import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Payment.css';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51Jw77eAPJel30nQhuBFLRAPWTlvToWoSiwKEicvArppHWK7bxQPOd3VS3J9F5rjObfpmiIAhgLDspX3GqpEWBbuZ00rySPrxrO');

const Payment = () => {
    const {id} = useParams();
    // console.log(id)

    const [packages, setPackages] = useState({});

    useEffect( () => {
        const url = `https://stark-island-55310.herokuapp.com/packages/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPackages(data);
        });
    }, [id]);

    return (
        <div className='payment-page'>
            <div className="container">
            <Header />
            <div className='payment-content'>
                <h2>Pay for Package ID: {id}</h2>
                <h3>Package Name: {packages.title}</h3>
                <h5>Price: ${packages.price}</h5>
            </div>
            <div className='row'>
            <div className="col-md-6 offset-md-3 bg-light rounded">
            <div>
                {packages?.price &&
                <Elements stripe={stripePromise}>
                <PaymentForm 
                item={packages}
                />
                </Elements>}
             </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Payment;