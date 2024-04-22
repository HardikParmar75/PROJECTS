import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Skincareone() {
    const { eid } = useParams();
    const [url1, seturl1] = useState('');
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/skincare/' + eid)
            .then((res) => { return res.json() })
            .then((data) => {
                seturl1(data.url)
                setprice(data.price)
                settitle(data.title)
            })
    }, [])
    return (
        <>
            <Navbar />
            <div className='row w2 m-auto mt-5'>
                <div className='col-xxl-6'>
                    <img src={url1} alt="" className='img-fluid' />
                </div>
                <div className='col-xxl-6'>
                    <nav aria-label="breadcrumb" className=''>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/' className='text-dark text-decoration-none'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                    <p className='fs-1'>{title}</p>
                    <p><span className='text-decoration-line-through'>$75.00</span><span className='fs-3 fw-bold'>{price}</span> & Free Shipping</p>
                    <p>Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.</p>
                    <p>Nulla eget tortor ultrices, ultricies turpis a, accumsan turpis. Quisque dignissim semper leo ac accumsan. Quisque est nisl, bibendum ut elit quis, pellentesque vehicula tellus. Sed luctus mattis ante ac posuere.</p>
                    <button className='border-0 bg-dark text-light px-2 py-2'>ADD TO CART</button>
                </div>
            </div>
            <hr className='w2 m-auto mt-5' />
        
            <Footer />
        </>
    )
}

export default Skincareone
