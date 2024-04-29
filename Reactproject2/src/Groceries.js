import React, { useState } from 'react'
import Navbar from './Navbar'
import bestsellingdata from './Bestsellingdata'
import shopdata from './Shopdata'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import groceriesdata from './Groceriesdata'

function Groceries() {
  const [currentPage, setCurrentPage] = useState(1);
  const [objectsToShow, setToShow] = useState(shopdata)
  const [search,setsearch]=useState('')
  const handlesearch = (e)=>{
    setsearch(e.target.value);
  }
  const [minprice,setminprice]= useState(0)
  const [maxprice,setmaxprice]= useState(40)
  const handlerange=(e)=>{
    setmaxprice(e.target.value)
  }
  const compare = (a, b, ascendingOrder) => {
    if (a < b) {
      return ascendingOrder ? -1 : 1;
    }
    if (a > b) {
      return ascendingOrder ? 1 : -1;
    }
    return 0;
  }
  const handleChange = (value) => {
    if(value == 'none'){
        setToShow([...objectsToShow])
    } else {
      let toType, toAscending
      switch(value){
        case 'ascending' : toType = true; toAscending = true; break;
        case 'descending' : toType = true; toAscending = false; break;
        case 'high' : toType = false; toAscending = true; break;
        case 'low' : toType = false; toAscending = false; break;
      }
      let current = [...objectsToShow]
      current.sort((a, b) => toType ?
             compare(a.name, b.name, toAscending) 
             : 
             compare(a.price, b.price, toAscending))
      setToShow([...current])
    }
  }
  const filtereddata = objectsToShow.filter((item) => {
    
    return item.name.toLowerCase().includes(search.toLowerCase())&& item.price >= minprice && item.price <= maxprice;
    
  });
  const cardsPerPage = 9;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const navigate = useNavigate()
  
  const filterdata = bestsellingdata.filter((item)=>item.price>=minprice && item.price<=maxprice )

  return (
    <>
      <div className='row me-0 p-5 bg-light'>
        <div className='col-lg-3 border-end px-2'>
          <div className='row'>
            <div className='col-10'>
            <input type="text" placeholder='Search Products...' className='w-100 h-100' value={search} onChange={handlesearch} />
            </div>
            <div className='col-2'>
              <div className='btn btn-success w-100'><i className='fa-solid fa-angle-right'></i></div>
            </div>
          </div>
          <p className='my-3'>Filter by Price</p>
          <input type="range" class="w-100" min={0} max={40} id="customRange1" onChange={handlerange}></input>
          ${minprice} - ${maxprice}
          <p className='text-success mt-3  fs-5'>Groceries <span className='text-dark'>(10)</span></p>
          <p className='text-success fs-5'>Juice <span className='text-dark'>(9)</span></p>
          <div class="row w2 m-auto row-cols-2 row-cols-md-1 g-4 text-center">
            {filterdata && filterdata.map((user, index) => (
              <div class="col" key={index} onClick={()=>{navigate(`/homeone/${user.name}`,{state:{productData:user}});window.scrollTo(0,0)}}>
                <div class="card border-0">
                  <img src={user.url} class="card-img-top img-fluid" alt="..." />
                  <div class="card-body bg-light">
                    <p className='graytext'>Groceries</p>
                    <h5 class="card-title fw-bold">{user.name}</h5>
                    <p><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i></p>
                    <p class="card-text fw-bold fs-5">${user.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-lg-9'>
          <nav aria-label="breadcrumb" className='w2 mt-5 m-auto'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/' className='text-dark text-decoration-none'>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Groceries</li>
            </ol>
          </nav>
          <p className='display-2 w2 m-auto fw-bold text-success'>Groceries</p>
          <p className='fs-5 w2 m-auto my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, velit et luctus interdum, est quam scelerisque tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus vitae dictum posuere. Suspendisse elementum metus ac dolor tincidunt, eu imperdiet nisi dictum.</p>
          <div className='w2 m-auto mt-5'>
            <span>Showing {indexOfFirstCard + 1}–{Math.min(indexOfLastCard, groceriesdata.length)} of {groceriesdata.length} results</span>
            <select className='float-end border-0' onChange={(e) => handleChange(e.target.value)}>
              <option value="none">Default</option>
              <option value="ascending">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high">Low to high</option>
              <option value="low">High to low</option>
            </select>
          </div>
          <div class="row w-100 m-auto row-cols-2 row-cols-md-3 g-4 text-center">
            {filtereddata.map((user, index) => (
              <div class="col" key={index} onClick={()=>{navigate(`/homeone/${user.name}`,{state:{productData:user}});window.scrollTo(0,0)}}>
                <div class="card border-0">
                  <img src={user.url} class="card-img-top img-fluid" alt="..." />
                  <div class="card-body bg-light">
                    <p className='graytext'>Groceries</p>
                    <h5 class="card-title fw-bold">{user.name}</h5>
                    <p><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i><i className='fa-regular fa-star'></i></p>
                    <p class="card-text fw-bold fs-5">${user.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ul className="pagination w2 m-auto mt-5">
            {Array.from({ length: Math.ceil(shopdata.length / cardsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <a href="#" className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Groceries
