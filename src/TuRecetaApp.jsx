import { useState } from "react";
import { Form } from "../components/Form";
import { Button } from "../components/Button";
import { FormResult } from "../components/FormResult";

import "./TuRecetaApp.css";



export const TuRecetaApp = () => {
 const [ingrediente, setIngrediente] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidadFabrica, setCantidadFabrica] = useState(0);
  const [cantidadReceta, setCantidadReceta] = useState();
 
  
  return (
    
    <div className="app-container">
      <h1 className="titulo">Calcula el Precio Costo de tu Receta</h1>

      <p className="descripcion">
        Por favor ingresa los siguientes datos para poder hacer el cálculo:
      </p>
      <Form/>
       
      <FormResult/>
      
      </div>
    
    
  );
}
