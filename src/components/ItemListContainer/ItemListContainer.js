import React, {useEffect, useState} from 'react'
import './ItemListContainer.css'
import {ItemList} from '../ItemList/ItemList'
import Data from '../../Data/productsData'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  console.log(Data);

// useEffect
// (
//   () => 
//   {
//     const getProducts = async() => 
//     {
//       try
//       {
//         const response = await fetch('/Mocks/productsData.json')
//         const data = await response.json()
//         console.log(data)
//         setProducts(data)
//       }
//       catch(error)
//       {
//         console.log("Hubo un error:")
//         console.log(error)
//       }
//     }

//     getProducts()
//   }, []
// );


useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(Data)
    })
    .then((res) => setProducts(res))
}, [])
console.log(products)
  return(
    <div className='itemListContainerContainer'> 
    <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer