import React from 'react'
import './Cart.css'
import {BsCart4} from 'react-icons/bs'
export const Cart = ({numero}) => {
  return (
    <div className='container'>
      <BsCart4/>
      <div className='cartNumber'>
        {numero}
      </div>
    </div>
  )
}