import React from 'react'
import { useContext } from 'react'
import { userlogin } from './App'

function Logout() {
    const {logindata}=useContext(userlogin)
  return (
    <>
      {logindata? <p>welcome {logindata}</p>:''}
    </>
  )
}

export default Logout
