import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
    let navigate = useNavigate();
    return (
        <div className='container mx-auto flex justify-center pt-10 pb-10 w-full bg-slate-300'>
            <div className="shadow-lg p-6 bg-white rounded">
                <div className="card">
                    <h5 className="card-header text-xl font-bold">About Us</h5>
                    <div className="card-body text-left">
                        <p className="card-text">
                            Our FERNS N PETALS-Online customized gift app is dedicated to providing you with unique and personalized gift options for any occasion. Whether you're celebrating a birthday, anniversary, wedding, or any other special event, we offer a wide range of customizable products to suit your needs.
                        </p>
                        <p className="card-text">
                            At our app, we understand the importance of meaningful and memorable gifts. That's why we strive to make the customization process easy and enjoyable, allowing you to create one-of-a-kind gifts that reflect your personality and sentiments.
                        </p>
                        <p className="card-text">
                            Our team is committed to delivering high-quality products and exceptional customer service. We work tirelessly to ensure your satisfaction and guarantee that your customized gifts exceed your expectations.
                        </p>
                        <p className="card-text">
                            Thank you for choosing our app. We look forward to helping you create unforgettable moments and cherished memories with our personalized gift options.
                        </p>
                        <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(-1) }}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
