

export const Calculos = (cantidadFabrica,precio,cantidadReceta,precioCostoTotal,unidades) => {
   // formulas
  const precioCosto =
    cantidadFabrica > 0 ? (precio / cantidadFabrica) * cantidadReceta : 0;

  const precioUnidad = unidades > 0 ?precioCostoTotal / unidades : 0;
  return {
    precioUnidad,
    precioCosto,

  }
}
 