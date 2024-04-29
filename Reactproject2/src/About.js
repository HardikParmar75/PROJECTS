import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useNavigate } from 'react-router'

function About() {
  const handleOnDragStart = (e) => e.preventDefault();
  const navigate = useNavigate()
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <div className="item " data-value="1" onDragStart={handleOnDragStart}>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg" alt="" className='w-75' />

    </div>,
    <div className="item" data-value="2" onDragStart={handleOnDragStart}>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg" alt="" className='w-75' />

    </div>,
    <div className="item" data-value="3" onDragStart={handleOnDragStart}>
      <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg" alt="" className='w-75' />

    </div>
  ];
  
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (count < 5000) {
          setCount(count + 1);
        }
      }, 1); 
  
      return () => clearTimeout(timer);
    }, [count]);

    const [count2, setCount2] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (count2 < 800) {
          setCount2(count2 + 1);
        }
      }, 1); 
  
      return () => clearTimeout(timer);
    }, [count2]);
    
    const [count3, setCount3] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (count3 < 40) {
          setCount3(count3 + 1);
        }
      }, 15); 
  
      return () => clearTimeout(timer);
    }, [count3]);
  
    
  
  return (
    <>
      <p className='py-5 text-center display-3 fw-bold bg-light'>About Us</p>
      <div className='row me-0 p-5 align-items-center'>
        <div className='col-md-6 p-3'>
          <p className='fs-1 fw-bold'>We Are Your Favourite Store.</p>
          <p className='fs-5'>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
          <p className='fs-5'>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
        </div>
        <div className='col-md-6'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg" alt="" className='img-fluid' />
        </div>
      </div>
      <div className='blue text-white fs-5 text-center align-items-center px-5 justify-content-center py-3 row me-0'>
        <div className='col-md-3'>
          <p className='fs-1'>Numbers Speak For Themselves!</p>
        </div>
        <div className='col-md-3'>
          <p className='fs-1'>{count}+</p>
          <p>Curated Products</p>
        </div>
        <div className='col-md-3'>
          <p className='fs-1'>{count2}+</p>
          <p>Curated Products</p>
        </div>
        <div className='col-md-3'>
          <p className='fs-1'>{count3}+</p>
          <p>Curated Products</p>
        </div>
      </div>
      <div className='row me-0 p-5'>
        <div className='col-md-6 p-5 bg-light text-center'>
        <AliceCarousel
          mouseTracking
          disableButtonsControls
          disableDotsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={1000}
        />
          <div class=" py-3">
            <p><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i></p>
            <p class="card-text fs-5">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className='row m-auto w-75 align-items-center'>
              <div className='col-3'>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" alt="" className='img-fluid' />
              </div>
              <div className='col-7 fs-5'>
                Mila Kunis
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 p-5'>
          <div className='row'>
            <div className='col-3'>
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" alt="" className='img-fluid' />
            </div>
            <div className='col-9'>
              <p className='fs-2 fw-bold'>Certified Products</p>
              <p className='fs-5'>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <p className='fs-1 fw-bold'>We Deal With Various Quality Organic Products!</p>
          <div className='row me-0'>
            <div className='col-md-6'>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Fresh fruits</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Dry fruits</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Fresh vegetables</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Dried vegetables</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Dried vegetables</p>
            </div>
            <div className='col-md-6'>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Beauty products</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Milk products</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Organic honey</p>
              <p><i className='fa-regular fa-check-circle text-success'></i> &nbsp; Organic tea</p>
            </div>
          </div>
          <div className='btn btn-success py-2 px-3 text-white fs-5' onClick={()=>{navigate('/everything');window.scrollTo(0,0)}}>
            <i className='fa-solid fa-cart-shopping'></i>&nbsp;Start Shopping
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
