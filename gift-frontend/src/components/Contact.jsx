import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    let navigate = useNavigate();

    // You can replace these with your actual phone number and email
    const phoneNumber = "+91 8903083176";
    const emailAddress = "charanmenaka@gmail.com";

    return (
        <div className='container mx-auto flex justify-center pt-10 pb-10 w-full bg-slate-300'>
            <div className="shadow-lg p-6 bg-white rounded">
                <div className="card">
                    <h5 className="card-header text-xl font-bold">Contact Us</h5>
                    <div className="card-body text-left">
                        <p className="card-text">If you have any questions, concerns, or feedback, please don't hesitate to contact us:</p>
                        <br />
                        <ul className="list-disc pl-6">
                            <li className="mb-2">Phone: <a href={`tel:${phoneNumber}`} className="text-blue-500 hover:underline">{phoneNumber}</a></li>
                            <li>Email: <a href={`mailto:${emailAddress}`} className="text-blue-500 hover:underline">{emailAddress}</a></li>
                        </ul>
                        <br />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(-1) }}>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
