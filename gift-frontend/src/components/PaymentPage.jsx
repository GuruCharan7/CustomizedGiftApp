import QRCode from 'qrcode.react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentPage() {

    let navigate = useNavigate();
    const [holderName, setHolderName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [orderStatus, setOrderStatus] = useState('');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleOrderPlacement = () => {
        // if (paymentMethod === 'cash') {
        //     // Place order directly for cash on delivery
        //     setOrderStatus('confirmed');
        // } else if (paymentMethod === 'atm') {
        //     if (!cardNumber || !amount) {
        //         alert('Please enter card number and amount');
        //     } else {
        //         // Process payment and place order
        //         setOrderStatus('confirmed');
        //     }
        // }

        toast.success("Order Placed Successfully");
        setTimeout(() => {
            navigate('/app/user/home');
        }, 3000)
    };

    return (
        <div className="flex items-center justify-center p-20 bg-slate-300">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl mb-4">Payment Details</h2>
                <input type="text" placeholder="Holder Name" value={holderName} onChange={(e) => setHolderName(e.target.value)} className="w-full border rounded py-2 px-3 mb-4" />
                <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="w-full border rounded py-2 px-3 mb-4" />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded py-2 px-3 mb-4" />
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Select Payment Method:</label>
                    <select value={paymentMethod} onChange={handlePaymentMethodChange} className="w-full border rounded py-2 px-3">
                        <option value="">Select Payment Method</option>
                        <option value="cash">Cash on Delivery</option>
                        {/* <option value="atm">ATM Card</option> */}
                        {/* <option value="gpay">GPay</option> */}
                        <option value="online">Online Payment</option>
                    </select>
                </div>
                {/* {paymentMethod === 'atm' && (
                    <>
                        <input type="text" placeholder="Enter Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full border rounded py-2 px-3 mb-4" />
                        <input type="text" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border rounded py-2 px-3 mb-4" />
                    </>
                )} */}
                {paymentMethod === 'online' ? (
                    <QRCode className="mx-auto" />
                ) : null}
                {orderStatus && (
                    <p className="mt-4">
                        {orderStatus === 'confirmed' ? 'Your order has been confirmed!' : 'Payment failed'}
                    </p>
                )}
                <button onClick={handleOrderPlacement} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Place Your Order</button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default PaymentPage;