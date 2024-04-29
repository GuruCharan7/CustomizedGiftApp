import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
    let navigate = useNavigate();
    return (
        <div className="bg-slate-300">
            <div className='container mx-auto flex justify-center pt-10 pb-4 w-full'>
                <div className="shadow-lg p-6 bg-white rounded">
                    <div className="card">
                        <h5 className="card-header text-xl font-bold">Terms & Conditions</h5>
                        <div className="card-body text-left">
                            <h5 className="card-title font-bold">1. Acceptance of Terms</h5>
                            <p className="card-text">By accessing or using the online customized gift app, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use the app.</p>
                            <br />
                            <h5 className="card-title font-bold">2. User Accounts</h5>
                            <p className="card-text">To access certain features of the app, you may be required to register for a user account. You must provide accurate and complete information when creating your account, and you are responsible for maintaining the confidentiality of your account credentials.</p>
                            <br />
                            <h5 className="card-title font-bold">3. Customized Gifts</h5>
                            <p className="card-text">The app allows users to create and purchase customized gifts. Users are solely responsible for the content they upload for customization. The app reserves the right to refuse any order that violates our content guidelines or terms of service.</p>
                            <br />
                            <h5 className="card-title font-bold">4. Payment and Refunds</h5>
                            <p className="card-text">Payment is required for the purchase of customized gifts. Prices are subject to change without notice. Refunds may be issued in accordance with our refund policy, which can be found on our website or provided upon request.</p>
                            <br />
                            <h5 className="card-title font-bold">5. Intellectual Property</h5>
                            <p className="card-text">All content and materials provided through the app, including but not limited to designs, images, and logos, are protected by intellectual property laws. Users may not use, reproduce, or distribute any content from the app without prior written consent.</p>
                            <br />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => { navigate(-1) }}>I Agree</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4">
                    <p className="text-center text-white">&copy; {new Date().getFullYear()} FERNS N PETALS. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
