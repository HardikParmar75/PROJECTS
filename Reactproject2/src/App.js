import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Everything from './Everything';
import Groceries from './Groceries';
import Juice from './Juice';
import About from './About';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Homeone from './Homeone.js';
import { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Cart from './Cart.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import Register from './Register.js';
export const userlogin = createContext()
// installations
// npm i bootstrap react-bootstrap 
// npm i axios 
// npm i json-Server
// npm i react-alice-carousel
// npm i react-router-dom react-router
// npm i react-toastify
function App() {
    const [loginuser,setloginuser] = useState('')
    const [logoutuser,setlogoutuser] = useState(false)
    const [username, setUsername] = useState('');
    return (
        <div className="">
            <BrowserRouter>
            <userlogin.Provider value={{loginuser,setloginuser,logoutuser,setlogoutuser,username}}>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/everything' element={<Everything />} />
                    <Route path='/groceries' element={<Groceries />} />
                    <Route path='/juice' element={<Juice />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/homeone/:productName' element={<Homeone />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
                </userlogin.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
