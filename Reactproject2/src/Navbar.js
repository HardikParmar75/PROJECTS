import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMycontext } from './Context'
import { userlogin } from './App'
import { toast } from 'react-toastify'

function Navbar() {
    const { cart, setcart } = useMycontext()
    const { logoutuser, setlogoutuser, setloginuser } = useContext(userlogin)
    const Logoutuser = () => {
        alert('are you sure?')
        setloginuser('')
        setlogoutuser(false)
    }
    const navigate = useNavigate()
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.name !== productId);
        setcart(updatedCart);
    };
    const calculateTotal = () => {
        let total = 0;
        cart.forEach((product) => {
            total += product.quantity * product.price;
        });
        return total.toFixed(2); // Return total with 2 decimal places
    };
    return (
        <>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Shopping cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mt-3 m-auto">
                        {cart && cart.map((user, index) => (

                            <div className="card mb-3" key={index}>

                                <div className="row g-0">
                                    <div className="col-md-4 p-3">
                                        <img src={user.url} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{user.name}<span className='float-end'><i className='fa-solid fa-close' onClick={() => removeFromCart(user.name)}></i></span></h5>
                                            <p className="card-text">${user.quantity} x ${user.price}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='offcanvas-footer'>
                    <hr />
                    <span className='ps-2 fw-bold'>SUBTOTAL <span className='float-end pe-2'>
                        ${calculateTotal()}
                    </span></span>
                    <hr />
                    <button className='w-100 fs-5 border-0 bg-success text-light py-2' onClick={() => { navigate('/cart') }}>VIEW CART</button>
                    <button className='w-100 my-2 fs-5 border-0 bg-success text-light py-2' onClick={() => { navigate('/checkout') }} >CHECKOUT</button>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className=''>
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" alt="" className='img-fluid' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <div className=''></div>
                                <Link to='/everything' className='pink  text-decoration-none fs-5'>Everything</Link>
                            </li>
                            <li className="nav-item">
                                <div className=''></div>
                                <Link to='/groceries' className=' pink text-decoration-none fs-5'>Groceries</Link>
                            </li>
                            <li className="nav-item">
                                <div className=''></div>
                                <Link to='/juice' className='pink  text-decoration-none fs-5'>Juice</Link>
                            </li>
                            <li className="nav-item">
                                <div className=''></div>
                                <Link to='/about' className='pink  text-decoration-none fs-5'>About</Link>
                            </li>
                            <li className="nav-item">
                                <div className=''></div>
                                <Link to='/contact' className='pink  text-decoration-none fs-5'>Contact</Link>
                            </li>

                        </ul>

                        <div className="d-flex me-2">
                            {/* <div>
                                    <span className='btn'>Welcome <b>"{displayusername}"</b></span>
                                    <Link to='/login' className='btn border rounded p-2'>Logout</Link>
                                </div> */}
                            {logoutuser ?
                                <button className='btn btn-danger' onClick={Logoutuser}> <Link to={'/'} className=''> Logout</Link></button>
                                :
                                <div>
                                    <button className='btn btn-success'> <Link to={'/login'} className=' text-white text-decoration-none'> <i className='bx bx-user'></i>  Sign-in  </Link></button>
                                    <button className='btn btn-dark'> <Link to={'/register'} className=' text-white text-decoration-none'> <i className='bx bx-lock'></i>Sign-up</Link></button>
                                </div>
                            }

                            {/* <Link to='/login' className='btn ms-2 btn border border-2'>Login</Link> */}

                            <button type="button" className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className='fw-bold text-success'>${calculateTotal()}</span> <i class="fa-solid fa-cart-shopping fs-5 text-success"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    {cart.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
