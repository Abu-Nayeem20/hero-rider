import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Firebase/Hooks/useAuth';

const PaymentForm = ({ item }) => {
    const {title, price} = item;
    const navigate = useNavigate();

    const {user} = useAuth();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect( () => {
        fetch('https://stark-island-55310.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.clientSecret)
            setClientSecret(data.clientSecret);
        })
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }
        setProcessing(true);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message);
            setSuccess('');
          } else {
              setError('');
            // console.log('[PaymentMethod]', paymentMethod);
          }
          // confirm intent
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user.email
                },
              },
            },
          );
          if (intentError) {
              setError(intentError.message);
              setSuccess('');
          }
          else{
              setError('');
            //   console.log(paymentIntent)
              setSuccess('Your Payment Successfull');
              setProcessing(false);

        const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction_id: paymentIntent.id
        };   
        
        const orderInfo = {
            title,
            price,
            payment,
            email: user.email
        }

        // Order Confirm 
        fetch('https://stark-island-55310.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                navigate("/thank_you");
            }
        })
          }

    };

    const inputStyle = {
        iconColor: 'red',
        color: '#013a4a',
        fontWeight: '700',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '20px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#013a4a',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
  }

    return (
        <div>
            <form onSubmit={handleSubmit} className='inputField'>
                <CardElement
                    options={{
                    style: {
                        base: inputStyle,
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {processing ? 
                
                <div className='text-center'><Spinner animation="grow" variant="danger" /></div>

                :<button className='pay-btn' type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
                </form>
                {
                    error && <p className='text-danger text-center'>{error}</p>
                }
                {
                    success && <p className='text-primary text-center'>{success}</p>
                }
        </div>
    );
};

export default PaymentForm;