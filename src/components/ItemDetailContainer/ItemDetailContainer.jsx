import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
// import { getProd } from "../../Data/productsData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  // const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        const products = [];
        const q = query(collection(db, "products"),where("id", "==", parseInt(productId)));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          products.push(doc.data());
        });
        console.log(products)
        setProduct(...products)
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [productId]);

  // useEffect(() => {
  //   getProd(productId)
  //     .then((res) => {
  //       setProduct(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [productId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail product={product}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
