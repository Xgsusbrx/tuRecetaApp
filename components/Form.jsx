import React from 'react';


export const Form = ({onSubmit, ingrediente, precio, cantidadFabrica,cantidadReceta,precioCosto,setIngrediente,setPrecio,setCantidadFabrica,setCantidadReceta, aggIngrediente}) => {


   


  return ( 



      <form className="formulario" onSubmit={onSubmit}>
        <label>Ingrediente</label>
        <input
          type="text"
          value={ingrediente}
          onChange={(e) => setIngrediente(e.target.value)}
        />

        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
        />

        <label>Cantidad de fábrica (en gramos, mililitros o unidades )</label>
        <input
          type="number"
          value={cantidadFabrica}
          onChange={(e) => setCantidadFabrica(Number(e.target.value))}
        />

        <label>Cantidad en la receta</label>
        <input
          type="number"
          value={cantidadReceta}
          onChange={(e) => setCantidadReceta(Number(e.target.value))}
        />

        <label>Precio costo del ingrediente</label>
        <input type="number" value={precioCosto} readOnly />

        <button className="boton" type="button" onClick={aggIngrediente}>
        Agregar ingrediente
      </button>

        
      </form>

     

  

  
  )
   
  
}
