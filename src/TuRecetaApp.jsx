import { useState } from "react";
import { Form } from "../components/Form";

import { FormResult } from "../components/FormResult";

import "./TuRecetaApp.css";
import { Ingredients } from "../components/Ingredients";
import { Calculos } from "../hooks/Calculos";

export const TuRecetaApp = () => {
  //estados
  const [ingrediente, setIngrediente] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [precio, setPrecio] = useState(0);
  const [cantidadFabrica, setCantidadFabrica] = useState(0);
  const [cantidadReceta, setCantidadReceta] = useState(0);
  const [unidades, setUnidades] = useState(0);
  const [precioCostoTotal, setPrecioCostoTotal] = useState(0);
 const {precioUnidad,precioCosto} = Calculos( cantidadFabrica,
  precio,
  cantidadReceta,
  precioCostoTotal,
  unidades)
 
  // funciones
console.log(precioCosto);
  const onSubmit = (e) => {
    e.preventDefault();
    if (ingrediente) {
      setIngredientes([...ingredientes, ingrediente]);
      setIngrediente("");
    }
  };
  const aggIngrediente = () => {
    setPrecioCostoTotal(precioCostoTotal + precioCosto);
    setIngredientes([...ingredientes, ingrediente])
    setIngrediente("");
    setPrecio(0);
    setCantidadFabrica(0);
    setCantidadReceta(0);
  };

  
  return (
    <div className="app-container">
      <h1 className="titulo">Calcula el Precio Costo de tu Receta</h1>

      <p className="descripcion">
        Por favor ingresa los siguientes datos para poder hacer el cálculo:
      </p>
      <Form
        ingrediente={ingrediente}
        precio={precio}
        cantidadFabrica={cantidadFabrica}
        cantidadReceta={cantidadReceta}
        precioCosto={precioCosto}
        setIngrediente={setIngrediente}
        setPrecio={setPrecio}
        setCantidadFabrica={setCantidadFabrica}
        setCantidadReceta={setCantidadReceta}
        onSubmit={onSubmit}
        aggIngrediente={aggIngrediente}
      />

      

      {ingredientes.length > 0 && <Ingredients ingredientes={ingredientes} />}
      <FormResult
        unidades={unidades}
        setUnidades={setUnidades}
        precioCostoTotal={precioCostoTotal}
        precioUnidad={precioUnidad}
      />
    </div>
  );
};
