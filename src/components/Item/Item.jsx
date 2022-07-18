import {React, useState }from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({stock , url, producto, id}) => {

    const [contador, setContador] = useState(0);

    const count = (value) => {
        const result = contador + value
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate('/detail/' + id)
    }
    return(
        <div className="itemContainer" >

            <h1 className="itemTitle">{producto}</h1>
            
            <img className="itemImage" src={url} alt={producto}/>

            <div className="itemDisplay">
            <button className="itemDetailButton" onClick={handleDetail} >Ver detalle del producto</button>
            </div>
        </div>
    )
}
export default Item;


