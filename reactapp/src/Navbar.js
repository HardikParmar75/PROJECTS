import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const [displayusername,displayusernameupdate]= useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname==='/login'||location.pathname==='/register'){
            showmenuupdateupdate(false)
        }
        else{
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('name');
            if(username===''||username===null){
                navigate('/login')
            }
            else{
                displayusernameupdate(username)
            }
        }
    },[location])
    return (
        <>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Shopping cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...sdfsdfwd
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
                <div className="container-fluid">
                    <div className=''>
                        <img src="./images/logo-regular.png" alt="" className='img-fluid' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/shop' className='text-dark  text-decoration-none'>SHOP ALL</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/makeup' className='text-dark  text-decoration-none'>MAKEUP</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/skincare' className='text-dark  text-decoration-none'>SKIN CARE</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/haircare' className='text-dark  text-decoration-none'>HAIR CARE</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/about' className='text-dark  text-decoration-none'>ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                <Link to='/contactus' className='text-dark  text-decoration-none'>CONTACT</Link>
                            </li>
                            
                        </ul>

                        <div className="d-flex">
                            {/* <Link to='/login' className='btn'><i className="fa-solid fa-user"></i></Link> */}
                            {showmenu && 
                            <div>
                                <span className='btn'>Welcome <b>{displayusername}</b></span>
                            <Link to='/login' className='btn border rounded-pill p-2'>Logout</Link>
                            </div>}
                            <button type="button" className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className='fw-bold'>$0.00</span> <i className="fa-solid fa-bag-shopping fs-5"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                                    0
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
