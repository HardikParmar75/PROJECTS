import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useMycontext } from './Context'

function Homeone() {
    const navigate = useNavigate()
    const { productName } = useParams();
    const location = useLocation()
    const productData = location.state.productData;
    const [quantity, setQuantity] = useState(1);
    const { cart, setcart } = useMycontext()
    const addtocart = () => {
        setcart([
            ...cart,
            {...productData,quantity:quantity}
        ])

    }
    
    
    return (
        <div>
            <div className='bg-light p-5 row me-0'>
                <div className='col-md-6'>
                    <img src={productData.url} alt="" className='img-fluid w-100 h-100' />
                </div>
                <div className='col-md-6'>
                    <p className='fw-bold fs-2'>{productData.name}</p>
                    <p className='fs-5'><span className='fs-3 fw-bold'>${productData.price}</span> + Free shipping</p>
                    <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                    <p>
                        <div className='row w-25 text-center mb-3'>
                            <div className='col border btn rounded-0' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
                                -
                            </div>
                            <div className='col border btn rounded-0'>
                                {quantity} {/* Display the quantity */}
                            </div>
                            <div className='col border btn rounded-0' onClick={() => setQuantity(quantity + 1)}>
                                +
                            </div>
                        </div>
                        <div className='btn btn-success text-white px-5 fs-5 py-2' onClick={addtocart}>Add to cart</div>
                    </p>

                    <p>Categories: <Link to='/groceries' className='text-decoration-none text-success'>Groceries</Link>,<Link to='/juice' className='text-decoration-none text-success'>Juice</Link></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homeone
