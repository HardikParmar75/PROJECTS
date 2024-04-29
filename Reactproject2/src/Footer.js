import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='blue row me-0 py-5 px-3 text-white'>
                <div className='col-md-6 p-5'>
                    <div>
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" alt="" className='img-fluid' />
                    </div>
                    <br />
                    <p className='fs-5'>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
                </div>
                <div className='col-md-3'>
                    <p className='fs-2 fw-bold my-3 text-white'>Quick Links</p>
                    <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
                        <li className="">
                            <div className=''></div>
                            <Link to='/about' className='text-white text-decoration-none fs-5'>About</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/cart' className='text-white  text-decoration-none fs-5'>Cart</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/checkout' className='text-white  text-decoration-none fs-5'>Checkout</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/contact' className='text-white  text-decoration-none fs-5'>Contact</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/' className='text-white  text-decoration-none fs-5'>Home</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/myaccount' className='text-white  text-decoration-none fs-5'>My account</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/shop' className='text-white  text-decoration-none fs-5'>Shop</Link>
                        </li>
                    </ul>

                    <p className='fs-2 fw-bold text-white my-3'>Site Links</p>
                    <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
                        <li className="">
                            <div className=''></div>
                            <Link to='/privacypolicy' className='text-white text-decoration-none fs-5'>Privacy policy</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/cart' className='text-white  text-decoration-none fs-5'>Shopping details</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/offers' className='text-white  text-decoration-none fs-5'>Offers coupons</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/terms' className='text-white  text-decoration-none fs-5'>Terms & conditions</Link>
                        </li>

                    </ul>
                </div>
                <div className='col-md-3 text-white'>
                    <p className='fs-4  my-3 fw-bold'>Download Our Mobile App</p>
                    <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</p>
                    <p className='fs-2 fw-bold text-white my-3'>Quick Links</p>
                    <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
                        <li className="">
                            <div className=''></div>
                            <Link to='/about' className='text-success text-decoration-none fs-5'>know more about us</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/everything' className='text-success  text-decoration-none fs-5'>Visit store</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/contact' className='text-success  text-decoration-none fs-5'>Let's connect</Link>
                        </li>
                        <li className="">
                            <div className=''></div>
                            <Link to='/' className='text-success  text-decoration-none fs-5'>Locate stores</Link>
                        </li>
                        <li className="">
                            <div className='row mt-3'>
                                <div className='col-6'>
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="" className='img-fluid' />
                                </div>
                                <div className='col-6'>
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="" className='img-fluid' />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=' row me-0 blue border-top py-3 px-4 align-items-center'>
                <div className='col-md-10'>
                    <p className='fs-5 text-light'>Copyright © 2024 | Organic Store</p>
                </div>
                <div className='col-md-2 '>
                    
                        <i className='fa-brands fa-linkedin text-white fs-5'></i> &nbsp;  <i className='fa-brands fa-facebook text-white fs-5'></i> &nbsp; <i className='fa-brands fa-twitter text-white fs-5'></i> &nbsp;  <i className='fa-brands fa-instagram text-white fs-5'></i> 
                    
                </div>
            </div>
        </>
    )
}

export default Footer
