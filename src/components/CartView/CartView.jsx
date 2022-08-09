import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "../CartView/CartView.css";
import { addDoc, collection} from "firebase/firestore";
import { db } from "../../firebase/config";

const Cart = () => {
  const { cart, deleteItem, calcularTotal } = useContext(CartContext);
  // const total = calcularTotal()
  console.log(cart);
  console.log(calcularTotal());

  if (cart.length === 0) {
    return <h2>Está vacío tu carrito, andá a comprar</h2>;
  }

  const confirmarOrden = async () => {
    const order = ordenGenerada("UsuarioAqui", "DomicilioAqui");
    //guardarOrden(orden);
    const docRef = await addDoc(collection(db, "orders"),order);
    console.log("document written with ID: ", docRef.id);  
  };

  const ordenGenerada = (user, adress) => {
    return {
      buyer: {
        user: user,
        adress: adress,
      },
      items: cart,
      total: calcularTotal(),
      createdAt: new Date().toLocaleString(),
    };
  };

  return (
    <div className="CartViewContainer">
      <div>
        {cart.map((prod) => (
          <div
            key={prod.id}
            style={
              {
                // display: 'flex',
                // border: '2px solid black',
                // margin: '10px',
                // padding: '10px',
              }
            }
          >
            <div>
              <img src={prod.image} width="70px" alt="product" />
            </div>
            <h2>Producto: {prod.title}</h2>
            <h2>$ {prod.price}</h2>
            <h2>Cantidad: {prod.cantidad}</h2>
            <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
          </div>
        ))}
        <h3>Total: $ {calcularTotal()} </h3>
        <button onClick={confirmarOrden}>Confirmar Orden</button>
      </div>
    </div>
  );
};

export default Cart;
