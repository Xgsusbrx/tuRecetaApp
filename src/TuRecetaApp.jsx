import { useState } from "react";
import "./TuRecetaApp.css"; // Asegurate de importar el archivo CSS

export const TuRecetaApp = () => {
  const [ingrediente, setIngrediente] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cantidadFabrica, setCantidadFabrica] = useState(0);
  const [cantidadReceta, setCantidadReceta] = useState();
  const [unidades, setUnidades] = useState(0);
  const [precioCostoTotal, setPrecioCostoTotal] = useState(0);

  const precioCosto =
    cantidadFabrica > 0 ? (precio / cantidadFabrica) * cantidadReceta : 0;

  const precioUnidad = precioCostoTotal / unidades;

  const aggIngrediente = () => {
    setPrecioCostoTotal(precioCostoTotal + precioCosto);
    setIngrediente("");
    setPrecio(0);
    setCantidadFabrica(0);
    setCantidadReceta(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIngrediente("");
    setPrecio("");
    setCantidadFabrica("");
    setCantidadReceta("");
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Calcula el Precio Costo de tu Receta</h1>

      <p className="descripcion">
        Por favor ingresa los siguientes datos para poder hacer el cálculo:
      </p>

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
      </form>

      <button className="boton" onClick={aggIngrediente}>
        Agregar ingrediente
      </button>

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
    </div>
  );
};
