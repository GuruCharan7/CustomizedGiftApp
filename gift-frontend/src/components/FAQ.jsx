import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FAQ() {
    let navigate = useNavigate();
    return (
        <div className="bg-slate-300">
            <div className='container mx-auto flex justify-center pt-10 pb-4 w-full'>
                <div className="shadow-lg p-6 bg-white rounded">
                    <div className="card">
                        <h5 className="card-header text-xl font-bold">Frequently Asked Questions (FAQ)</h5>
                        <div className="card-body text-left">
                            <h5 className="card-title font-bold">1. How do I create a customized gift?</h5>
                            <p className="card-text">To create a customized gift, simply browse through our selection of products, choose the item you wish to customize, and follow the prompts to personalize it with your desired text, images, or designs.</p>
                            <br />

                            <h5 className="card-title font-bold">2. Can I preview my customized gift before ordering?</h5>
                            <p className="card-text">Yes, you can preview your customized gift before placing your order. Our app provides a preview feature that allows you to see how your customization will appear on the final product.</p>
                            <br />

                            <h5 className="card-title font-bold">3. How long does it take to receive my customized gift?</h5>
                            <p className="card-text">The delivery time for customized gifts varies depending on factors such as product availability, customization complexity, and shipping method selected. We provide estimated delivery times at the time of purchase.</p>
                            <br />

                            <h5 className="card-title font-bold">4. What if I'm not satisfied with my customized gift?</h5>
                            <p className="card-text">If you are not satisfied with your customized gift for any reason, please contact our customer support team. We will do our best to address your concerns and ensure your satisfaction.</p>
                            <br />

                            <h5 className="card-title font-bold">5. Are there any restrictions on the content I can use for customization?</h5>
                            <p className="card-text">While we encourage creativity, there are certain restrictions on the content that can be used for customization, including copyrighted material, offensive or inappropriate content, and trademarks belonging to third parties.</p>

                            <br />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => { navigate(-1) }}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-[0.2%]'>

            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto px-4">
                    <p className="text-center text-white">&copy; {new Date().getFullYear()} FERNS N PETALS. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    )
}
