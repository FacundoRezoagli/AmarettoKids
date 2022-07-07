import React, {useState, useEffect}  from 'react'
import './ItemDetail.css'

export const ItemDetail = ({productDetail}) => {
   const [detail, setdetail] = useState({});
      // useEffect(() => 
      // {
      //   setdetail(productDetail)
      //   console.log(detail)
      // }, [])

      const loadData = async () => {
        setdetail(productDetail);
    }
    
    useEffect(() => {
        loadData();
    }, [])

  return (
    <div className='ItemDetail'>
        <h1>{detail.nombre}</h1>
        <img className='img' src={detail.imagen}></img>
        <p>{detail.itemDetail}</p>
    </div>
  )
}

export default ItemDetail