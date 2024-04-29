import React from 'react'
import bestsellingdata from './Bestsellingdata'
import { useNavigate } from 'react-router'
import trendingproductdata from './TrendingProductsdata'
import Footer from './Footer'


function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className='row me-0 bg-light p-5'>
        <div className='col-lg-6 p-5'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" className='img-fluid' />
        </div>
        <div className='col-lg-6 p-5 '>
          <p className='fs-3'>Best Quality Products</p>
          <p className='display-2 fw-bold'>Join The Organic Movement!</p>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <div className='btn btn-success text-white py-2' onClick={()=>{navigate('/everything');window.scrollTo(0,0)}}>
            <i className='fa-solid fa-cart-shopping'></i> &nbsp; SHOP NOW
          </div>
        </div>
      </div>

      <div className=' row me-0 justify-content-center px-5 py-2 bg-dark gap-3'>
        <div className='col-lg-2 py-3 text-white gray'>
          <div className='row'>
            <div className='col-2'>
              <i class="fa-solid fa-truck text-success fs-5"></i>
            </div>
            <div className='col-10'>
              <p className='fs-5 fw-bold'>Free Shipping</p>
              <p>Above $5 only</p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 py-3 text-white  gray'>
          <div className='row'>
            <div className='col-2'>
              <i class="fa-solid fa-phone text-success fs-5"></i>
            </div>
            <div className='col-10'>
              <p className='fs-5 fw-bold'>Certified Organic</p>
              <p>100% Garuntee</p>
            </div>
          </div>
        </div>
        <div className='col-lg-2 py-3 text-white  gray'>
          <div className='row'>
            <div className='col-2'>
              <i class="fa-solid fa-wallet text-success fs-5"></i>
            </div>
            <div className='col-10'>
              <p className='fs-5 fw-bold'>Huge Savings</p>
              <p>At Lowest Price</p>
            </div>

          </div>
        </div>
        <div className='col-lg-2 py-3 text-white  gray'>
          <div className='row'>
            <div className='col-2'>
              <i class="fa-solid fa-recycle text-success fs-5"></i>
            </div>
            <div className='col-10'>
              <p className='fs-5 fw-bold'>Easy Returns</p>
              <p>No Questions Asked</p>
            </div>

          </div>
        </div>
      </div>

      <p className='fs-1 text-center my-5 fw-bold'>Best Selling Products</p>
      <div class="row w2 m-auto row-cols-2 row-cols-md-4 g-4 text-center">
        {bestsellingdata && bestsellingdata.map((user, index) => (
          <div class="col" key={index} onClick={()=>{navigate(`/homeone/${user.name}`,{state:{productData:user}});window.scrollTo(0,0)}}>
          <div class="card border-0">
              <img src={user.url} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <p className='graytext'>{user.category}</p>
                <h5 class="card-title fw-bold">{user.name}</h5>
                <p><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i></p>
                <p class="card-text fw-bold fs-5">${user.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div class="row m-auto row-cols-1 row-cols-md-3 mt-5 p-5 bg-light g-4">
        <div class="col" >
          <div class="card py-4 cp1">
            <div class="card-body">
              <h2 class="card-title fw-bold text-primary">Farm Fresh Fruits</h2>
              <p class="card-text fs-5 text-white">Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
              <div className='btn btn-success text-white' onClick={() => { navigate('/juice');window.scrollTo(0,0) }}>
                SHOP NOW <i className='fa-solid fa-arrow-right'></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col " >
          <div class="card py-4 cp2">
            <div class="card-body">
              <h2 class="card-title fw-bold text-primary">Fresh Vegetables</h2>
              <p class="card-tex fs-5 text-light  ">Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</p>
              <div className='btn btn-success text-white' onClick={() => { navigate('/everything');window.scrollTo(0,0) }}>
                SHOP NOW <i className='fa-solid fa-arrow-right'></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col" >
          <div class="card py-4 cp3">
            <div class="card-body">
              <h2 class="card-title fw-bold text-primary">Organic Legume</h2>
              <p class="card-text fs-5 text-white">Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
              <div className='btn btn-success text-white' onClick={() => { navigate('/groceries');window.scrollTo(0,0) }}>
                SHOP NOW <i className='fa-solid fa-arrow-right'></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' row me-0 black py-5 px-4'>
        <div className='col-lg-10'>
          <p className='display-4 text-light'>Get 25% Off On Your First Purchase!</p>
        </div>
        <div className='col-lg-2 pt-4'>
          <div className='btn btn-success text-white py-2' onClick={() => { navigate('/everything');window.scrollTo(0,0) }}>
            <i className='fa-solid fa-cart-shopping'></i> &nbsp; SHOP NOW
          </div>
        </div>
      </div>
      <div className='bg-light text-center fs-3'>
        <p>Try It For Free. No Registration Needed.</p>
      </div>

      <p className='fs-1 text-center my-5 fw-bold'>Trending Products</p>
      <div class="row w2 m-auto row-cols-2 row-cols-md-4 g-4 text-center">
        {trendingproductdata && trendingproductdata.map((user, index) => (
          <div class="col" key={index} onClick={()=>{navigate(`/homeone/${user.name}`,{state:{productData:user}});window.scrollTo(0,0)}}>
            <div class="card border-0">
              <img src={user.url} class="card-img-top img-fluid" alt="..." />
              <div class="card-body">
                <p className='graytext'>{user.category}</p>
                <h5 class="card-title fw-bold">{user.name}</h5>
                <p><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i></p>
                <p class="card-text fw-bold fs-5">${user.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className='fs-1 text-center my-5 fw-bold'>Customers Reviews</p>
      <div class="row m-auto row-cols-1 row-cols-md-3 mt-5 p-5 bg-light text-center g-4">
        <div class="col" >
          <div class="card py-4">
            <div class="card-body">
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
        </div>
        <div class="col" >
          <div class="card py-5 cp2">
            <div class="card-body">
              <h2 class="card-title fw-bold text-primary">Deal Of The Day 15% Off On All Vegetables!</h2>
              <p class="card-tex fs-5 text-light  ">I am text block. Click edit button to change this tex em ips.</p>
              <div className='btn btn-success text-white' onClick={() => { navigate('/everything');window.scrollTo(0,0) }}>
                SHOP NOW <i className='fa-solid fa-arrow-right'></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col" >
          <div class="card py-4">
            <div class="card-body">
              <p><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i><i className='fa-solid fa-star' style={{ color: 'yellow' }}></i></p>
              <p class="card-text fs-5">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <div className='row m-auto w-75 align-items-center'>
                <div className='col-3'>
                  <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png" alt="" className='img-fluid' />
                </div>
                <div className='col-7 fs-5'>
                  Mike Sendler
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row me-0 bg-light text-center align-items-center py-5'>
        <div className='col-md-2'>
          <p className='fs-5 fw-bold'>Featured Brands:</p>
        </div>
        <div className='col-md-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg" alt="" className='img-fluid' />
        </div>
        <div className='col-md-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" alt="" className='img-fluid' />
        </div>
        <div className='col-md-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" alt="" className='img-fluid' />
        </div>
        <div className='col-md-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" alt="" className='img-fluid' />
        </div>
        <div className='col-md-2'>
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg" alt="" className='img-fluid' />
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Home
