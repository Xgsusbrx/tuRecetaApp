import React from "react";
export const Ingredients = ({ ingredientes }) => {
  return (
    <section>
      <h2>Ingredientes agregados</h2>

      <ul>
        {ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </section>
  );
}
