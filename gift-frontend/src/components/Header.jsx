import React from 'react'
import logo from '../assets/images/fnp.png'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const Header = () => {
    return (
        <div>
            <div className='w-full bg-[#060606] flex justify-between text-white'>
                <div className='flex'>
                    <img src={logo} className='h-35 w-40 p-3' />

                    <div className='pt-3'>
                        <form
                            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group" style={{ width: '400px', left: '8%', padding: '1%' }}>
                                <input type="text" className="form-control bg-light border-0 small " placeholder="Search for gifts, cakes, etc.."
                                    aria-label="Search" aria-describedby="basic-addon2"
                                />
                                <button className="btn btn-secondary">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='pt-4 flex justify-between'>
                    <div className='flex flex-row mx-5'>
                        <NavLink to={'/app/user/home'} className='hover:text-blue-500 text-xl mx-3'>HOME</NavLink >
                        <NavLink to={'/app/user/about'} className='hover:text-blue-500 text-xl mx-3'>ABOUT US</NavLink>
                        <NavLink to={'/app/user/contact'} className='hover:text-blue-500 text-xl mx-3'>CONTACT</NavLink>
                        <NavLink to={'/app/user/cart'} className='hover:text-blue-500 text-xl mx-3'>CART
                        <i className='bi bi-cart pl-1' style={{ fontSize: '120%'}}></i>
                        </NavLink>
                    </div>
                    <div className='pr-14 pt'>                       
                        <Dropdown />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header