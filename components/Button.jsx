import { useState } from "react";

export const Button = ({precioCosto,setIngrediente,setPrecio,setCantidadFabrica,setCantidadReceta}) => {
const [precioCostoTotal, setPrecioCostoTotal] = useState(0);
    
     const aggIngrediente = () => {
    setPrecioCostoTotal(precioCostoTotal + precioCosto);
    setIngrediente("");
    setPrecio(0);
    setCantidadFabrica(0);
    setCantidadReceta(0);
    
 
  }
  return (
  <button className="boton" onClick={aggIngrediente}>
          Agregar ingrediente
        </button>
  )
}
