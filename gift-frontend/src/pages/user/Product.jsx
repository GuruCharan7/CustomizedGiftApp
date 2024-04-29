import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { gifts } from '../../assets/data/data';
import { useDispatch } from 'react-redux';
import { addCart } from '../../features/CartSlice';

const Product = () => {

    const [id] = useSearchParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        setDetails(gifts[id.get("id")     - 1])
    }) 


    let navigate = useNavigate();

    let handleView = (id) =>{
        navigate({
            pathname: "/app/user/cart",
            search: createSearchParams({
                id: id
            }).toString()
        })
    }

    const dispatch = useDispatch();

    return (
        <div className='bg-slate-300'>
            <div className='md:container md:mx-auto px-5 py-5 flex flex-row flex-wrap justify-center'>
                <div className="max-w-sm rounded overflow-hidden shadow-2xl">
                    <img className="w-full" src={details.link} alt="Sunset in the mountains" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{details.title}</div>
                    <p className="text-gray-700 text-base text-xl">
                        ₹{details.price}/-
                    </p>
                    <div className='pt-2'>
                        <input
                            placeholder='Address'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                        <input
                            placeholder='Enter Customization'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                    </div>
                    <div className='px-6 pt-20'>
                        <button className="bg-orange-400 hover:bg-green-400 text-white text-xl font-bold py-2 px-4 rounded inline-flex items-center" onClick={()=>{
                            dispatch(addCart({id: details.id, title: details.title, link: details.link, tag: details.tag, quantity:1, totalPrice: details.price}))
                            navigate('/app/user/cart')}}>
                            <i className='bi bi-cart p-2' style={{ fontSize: '140%' }}></i>
                            <span>ADD TO CART</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product