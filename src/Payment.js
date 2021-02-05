import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getCartTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { db } from "./firebase";


function Payment() {
    const [{ cart, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeeded, setSucceeeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    {/* Very important snippet\n */}
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])
    {/* Very important snippet^ */}

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('🧑', user)

    const handleSubmit = async event =>{
        //do some fanxy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            // paymentIntent = payment confirmation
            
            db.collection('users').doc(user?.uid).collection('orders')
            .doc(paymentIntent.id).set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeeded(true);
            setError(null);
            setProcessing(false);

            dispatch ({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })
    }

    const handleChange = event =>{
        //do some fanzy stripe stuff...
        setDisabled(event.empty); //If it is empty go ahead and disable the button
        setError(error.event ? event.error.message : ""); //Error then show the error or show nothing 
    }


    return (
        <div className = "payment">
            <div className = "payment__container">

                <h1>
                    Checkout (<Link to="/checkout"> 
                            {cart?.length} items
                            </Link>)
                </h1>



                {/* Payment section - Delivery Address */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>39 New Delhi Drive</p>
                        <p>ON, L3S-0E9</p>
                    </div>
                </div>

                {/* Payment section - Revoew Items */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {cart.map(item => (
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>      

                {/* Payment section - Payment Method */}
                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange = {handleChange}/>
                            <div className = 'payment__priceContainer'>
                            <CurrencyFormat 
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType = {"text"}
                                thousandSeparator = {true}
                                prefix = {"$"}
                            />
                            <button disabled = {processing || disabled || succeeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}
                                </span>
                            </button>
                            </div>

                            <div> 
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
