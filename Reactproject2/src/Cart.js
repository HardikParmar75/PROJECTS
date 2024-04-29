import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useMycontext } from './Context'

function Cart() {
    const navigate = useNavigate()
    const handlecheckout = () => {
        navigate('/checkout')
        window.scrollTo(0, 0)
    }
    const { cart, setcart } = useMycontext()
    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((product) => product.name !== productId);
      setcart(updatedCart);
  };
  
    const updateQuantity = (index, newQuantity) => {
        const updatedCart = [...cart]
        updatedCart[index].quantity = newQuantity
        setcart(updatedCart)
    }

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal

    return (
        <>
            <div className='w2 m-auto mt-5'>
                <p className='fs-1'>Cart</p>
                <div className='table-responsive'>
                    <table class="table border">
                        <thead className='table-light'>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart && cart.map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='btn' onClick={()=>{removeFromCart(user.name)}} >
                                            <i className='fa-solid fa-close'></i>
                                        </div>
                                    </td>
                                    <td><img src={user.url} alt="" style={{ height: "70px", width: "100px" }} /></td>
                                    <td>{user.name}</td>
                                    <td>{user.price}</td>
                                    <td>
                                        <div className='row w-75 text-center'>
                                            <div className='col border btn rounded-0' onClick={() => updateQuantity(index, user.quantity > 1 ? user.quantity - 1 : 1)}>
                                                -
                                            </div>
                                            <div className='col border btn rounded-0'>
                                                {user.quantity}
                                            </div>
                                            <div className='col border btn rounded-0' onClick={() => updateQuantity(index, user.quantity + 1)} >
                                                +
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.quantity * user.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row w2 m-auto'>
                <div className='col-lg-6'>

                </div>
                <div className='col-lg-6'>
                    <table class="table border">
                        <thead className='table-light'>
                            <tr className='fs-4'>
                                <th scope=" display-1">Cart Totals</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='fs-5'>Total</td>
                                <td className='fs-5'>${subtotal.toFixed(2)}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <button className='bg-success border-0 text-light w-100 my-3 py-3 fs-5   m-auto' onClick={handlecheckout}>PROCEED TO CHECKOUT</button>
                        </tfoot>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
