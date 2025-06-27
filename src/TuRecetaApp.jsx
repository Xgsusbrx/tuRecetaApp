import { useState } from "react";

export const TuRecetaApp = () => {
  const [ingrediente, setIngrediente] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidadFabrica, setCantidadFabrica] = useState(0);
  const [cantidadReceta, setCantidadReceta] = useState();
  const [unidades, setUnidades] = useState(0);
  const [precioCostoTotal, setPrecioCostoTotal] = useState(0);

  const precioCosto = 
  cantidadFabrica > 0 ? (precio / cantidadFabrica) * cantidadReceta: 0
 

  const precioUnidad = 
  (precioCostoTotal/unidades) 

  const aggIngrediente = () => {
    setPrecioCostoTotal(precioCostoTotal + precioCosto);
   setIngrediente('');
   setPrecio(0);
   setCantidadFabrica (0);
   setCantidadReceta(0);   
    
  };
  const onSubmit = () =>{

    setIngrediente('')
  setPrecio('');
    setCantidadFabrica('');
    setCantidadReceta('');  
  } 

  return (
    <>
      <h1>Calcula el Precio costo de tu receta aquí</h1>

      <h3>
        Por favor ingresa los siguientes datos para poder hacer el calculo
      </h3>
      <h4>Vamos paso por paso ingrediente por ingrediente: </h4>

      <form onSubmit={onSubmit}
    >
        <label>Ingrediente </label>
        <input type="text" value={ingrediente} onChange={(e) => setIngrediente(e.target.value)}></input>
        <label>Precio </label>
        <input
          type="number"
          value={precio}
          onChange={(event) => setPrecio(Number(event.target.value))}
        ></input>
        <label>Cantidad de fabrica (en gramos o mililitros)</label>
        <input
          type="number"
          value={cantidadFabrica}
          onChange={(event) => setCantidadFabrica(Number(event.target.value))}
        ></input>
        <label> Cantidad de la receta</label>
        <input
          type="number"
          value={cantidadReceta}
          onChange={(event) => setCantidadReceta(Number(event.target.value))}
        ></input>
        <label>Precio costo del ingrediente</label>
        <input type="number" value={precioCosto} readOnly></input>
      </form>
      <button onClick={aggIngrediente}>Agregar </button>
      <br></br>
      <label>Cuantas porciones resultan de tu mezcla?</label>
      <input type="number" value={unidades} onChange={(e) => setUnidades(Number(e.target.value)) }></input>

      <label> Costo Total de la preparacion </label>
      <input readOnly value={precioCostoTotal}></input>

      <label>El precio por porcion o de cada unidad es de:
      </label>
      <input type="number" value={precioUnidad}></input>
    </>
  );
};
