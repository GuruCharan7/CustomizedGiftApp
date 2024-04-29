import React from 'react'
import { gifts, order, tags } from '../data/data'
import { createSearchParams, useNavigate } from 'react-router-dom';

const Gifts = () => {

    const smoothScrollTo = (elementId) => {
        console.log(elementId);
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    let navigate = useNavigate();
    let handleView = (id) =>{
        navigate({
            pathname: "/app/user/product",
            search: createSearchParams({
                id: id
            }).toString()
        })
    }

    return (
        <>
            <div className='md:container md:mx-auto px-5 py-5 flex flex-row flex-wrap justify-between'>
                <div className='row'>
                    {
                        order.map((item) => (
                            <div className='col-md-2'>
                                <div className="relative flex flex-col mt-4 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56" key={item.id}>
                                    <div
                                        className="relative h-50 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                        <img
                                            className='object-cover'
                                            src={item.desc}
                                            alt="card-image" />
                                    </div>
                                    <div className="p-6">
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {item.title}
                                        </h5>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <button
                                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                            type="button"
                                            onClick={() => smoothScrollTo(item.title)}>
                                            {/* <a href='#tags'>
                                                </a> */}
                                            Click Here
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='pt-8'>
                    {
                        tags && tags.map((e) => (
                            <>
                                <h5 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 py-3" key={e.id} id={e.tag}>
                                    {e.tag}
                                </h5>
                                <div className="flex flex-row">
                                    {
                                        gifts && gifts.filter((item) =>
                                            item.tag == e.tag).map((record) => (
                                                <>
                                                    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mr-[50px]" key={record.id}>
                                                        <img className="object-contain" src={record.link} alt="Sunset in the mountains" />
                                                        <div className="px-6 py-4">
                                                            <div className="font-bold text-xl mb-2">{record.title}</div>
                                                            <div className='flex justify-between pt-2'>
                                                                <p className="text-gray-700 text-base pt-2">
                                                                    ₹{record.price}
                                                                </p>
                                                                <button
                                                                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-3 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                                                    type="button" onClick={() => handleView(record.id)}>
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div >
                                                </>
                                            ))
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Gifts