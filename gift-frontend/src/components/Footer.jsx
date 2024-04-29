import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div style={{ padding: '3%' ,backgroundColor: "rgb(161,161,170)"}}>

        <footer className='py-5'>
          <div className='row'>
            <div className='col-6 col-md-2 mb-3'>
              <Link to={'/app/termscondition'} style={{ textDecoration: 'none', color: 'black' }}>TERMS & CONDITIONS</Link>
            </div>
            <div className='col-6 col-md-2 mb-3'>
              <Link to={'/app/faq'} style={{ textDecoration: 'none', color: 'black' }}>FAQ</Link>
            </div>
            <div className='col-6 col-md-2 mb-3'>
              {/* <Link to={'/app/contact'} style={{ textDecoration: 'none', color: 'black' }}>CONTACT</Link> */}
            </div>
            <div className='col-md-5 offset-md-1 mb-3'>
              <form>
                <h5>Subscribe to our Newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className='d-flex flex-column flex-sm-row w-100 gap-2 pt-3'>
                  <label className='visually-hidden'>Email Address</label>
                  <input id='newsletter1' type='text' className='form-control' placeholder='Email Address'></input>
                  <button className='btn btn-primary'>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
            <p>© GIFTCRAFT Company, Inc. All rights reserved.
              <p>Created By Guru Charan, Subiksha, Saifullah</p>
            </p>
            <ul className='list-unstyled d-flex'>
              <li className='ms-3'>
                <i className='bi bi-twitter' style={{ fontSize: '150%' }} />
              </li>
              <li className='ms-3'>
                <i className='bi bi-instagram' style={{ fontSize: '150%' }} />
              </li>
              <li className='ms-3'>
                <i className='bi bi-facebook' style={{ fontSize: '150%' }} />
              </li>
            </ul>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer