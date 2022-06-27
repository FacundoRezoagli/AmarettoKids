import React from 'react'
import './ItemListContainer.css'
import  ItemCount  from '../ItemCount/ItemCount'
import img1 from '../../assets/Img/img1.jpg'
import img2 from '../../assets/Img/img2.jpg'
import img3 from '../../assets/Img/img3.jpg'
const ItemListContainer = () => {
  return (
    <div className='container'> 
      <ItemCount url = {img1} stock = {10} producto = {'Buzo Llamas'} />
      <ItemCount url = {img2} stock = {10} producto = {'Camperon Azul'}/>
      <ItemCount url = {img3} stock = {10} producto = {'Gorro/Bufanda'}/>
    </div>
  )
}

export default ItemListContainer