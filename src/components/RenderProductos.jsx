// src/components/RenderProductos.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/productos.css";
function RenderProductos({ productos }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos que coincidan con los filtros.</p>;
  }

  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <div key={producto.id} className="tarjeta">
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="info">
            <h4>{producto.nombre}</h4>
            <p className="personas">{producto.personas} Personas</p>
            <Link to={`/detalle/${producto.id}`} className="btn_producto">
              Ver detalles
            </Link>
            <p className="precio">
              ${Number(producto.precio).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default RenderProductos;