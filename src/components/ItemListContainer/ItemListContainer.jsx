import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'
import Data from '../../Data/productsData'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(Data)
    })
    .then((res) => setProducts(res))
}, [])
  return(
    <div className='itemListContainerContainer'> 
    <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer