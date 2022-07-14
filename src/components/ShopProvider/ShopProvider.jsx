import React, {createContext, useState} from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

  const [estadoA, addItem] = useState("0")

  return (
    <Shop.Provider value = {{estadoA, addItem}}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider