import React from 'react'
import './Cart.css'
import {BsCart4} from 'react-icons/bs'
export const Cart = () => {
  let number = 0;
  return (
    <div className='cartContainer'>
      <BsCart4/>
      {number == 0 ?(<div></div>)
      :(<div className='cartNumber'>
        {number}
      </div>) 
      }
    </div>
  )
}
