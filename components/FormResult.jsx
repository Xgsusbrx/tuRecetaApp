import { useState } from "react";


export const FormResult = ({precioCostoTotal}) => {

const [unidades, setUnidades] = useState(0);
  

  return (
  
        
    <div className="resultados">
        <label>¿Cuántas porciones resultan de tu mezcla?</label>
        <input
          type="number"
          value={unidades}
          onChange={(e) => setUnidades(Number(e.target.value))}
        />

        <label>Costo total de la preparación</label>
        <input type="number" value={precioCostoTotal} readOnly />

        <label>Precio por porción o unidad</label>
        <input type="number" value={precioUnidad || 0} readOnly />
        </div>
        
  )
}
