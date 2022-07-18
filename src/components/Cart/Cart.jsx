import React, {useContext, useState, useEffect} from 'react'
import './Cart.css'
import {BsCart4} from 'react-icons/bs'
import { Shop } from '../ShopProvider/ShopProvider';
export const Cart = () => {

  const [number, setNumber] = useState(0);

  const {estadoA} = useContext(Shop);
  useEffect(() => {
  setNumber(estadoA)
  }, [estadoA])
  
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
