import React, {useState, useEffect} from 'react'
import Data from '../../Data/productsData'
import {ItemDetail} from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ({key}) => {

    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        new Promise((resolve, reject) => {
          resolve(Data.find((elemento) => elemento.id == key));
          console.log(key)
        })
        .then((res) => setProductDetail(res))
        console.log(productDetail)
    }, [])
    


    // useEffect(() =>{
    //     const getProductDetail = async () => {
    //         try {
    //             const response = await fetch('../../')
                
    //         } catch (error) {
                
    //         }
    //     }
    // })

  return (
  <div>
    <ItemDetail productDetail={productDetail}></ItemDetail>
  </div>
  )
}

export default ItemDetailContainer