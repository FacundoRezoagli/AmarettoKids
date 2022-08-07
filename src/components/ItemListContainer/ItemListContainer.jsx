import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
//import Data from "../../Data/productsData";
//import { getProds } from "../../Data/productsData";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  // useEffect(() => {
  //   setLoading(true);

  //   getProds(categoryId)
  //     .then((res) => {
  //       setProducts(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [categoryId]);

  useEffect(() => {
    setLoading(false);
    const getProductos = async () => {
      try {
        var querySnapshot;
        const products = [];
        console.log(categoryId);
        if (categoryId !== undefined) {
          const q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
          );
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "products"));
        }
        console.log(querySnapshot);

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          products.push(doc.data());
        });
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    getProductos();
  }, [categoryId]);

  // return (
  //   <div className="itemListContainerContainer">
  //     <ItemList products={products} />
  //   </div>
  // );
  return (
    <div className="item-list-container">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <ItemList products={products} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
