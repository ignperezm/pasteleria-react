import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { productos } from "../components/dataProductos";
import "../assets/css/detalle.css";

function Detalle() {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const producto = productos.find((p) => p.id === Number(id));

  const agregarAlCarrito = () => {
    if (!producto) return;
    const qty = Math.max(1, Number(cantidad) || 1);
    const raw = localStorage.getItem("carrito");
    const carrito = raw ? JSON.parse(raw) : [];
    const existente = carrito.find((p) => p.id === producto.id);
    if (existente) existente.cantidad += qty;
    else carrito.push({ id: producto.id, cantidad: qty });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Feedback sencillo con popup
    setMostrarPopup(true);
  };

  if (!producto) {
    return (
      <main className="detalle-container">
        <div className="detalle-info">
          <h2>Producto no encontrado</h2>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="detalle-container">
        <div className="detalle-imagen">
          {(() => {
            const imagenSrc = producto.imagen?.startsWith("/")
              ? producto.imagen
              : `/${producto.imagen}`;
            return (
              <img id="detalle-imagen" src={imagenSrc} alt={producto.nombre} />
            );
          })()}
        </div>

        <div className="detalle-info">
          <h2 id="detalle-nombre">{producto.nombre}</h2>
          <p className="precio" id="detalle-precio">
            ${Number(producto.precio).toLocaleString("es-CL")} CLP
          </p>
          <p className="descripcion" id="detalle-descripcion">{producto.descripcion}</p>

          <div className="acciones">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              min={1}
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
            <button className="btn_detalle" onClick={agregarAlCarrito}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </main>

      {/* Productos recomendados simples */}
      <section className="recomendados">
        <h3>Productos Recomendados</h3>
        <div className="grid">
          {([3, 8, 2]
            .filter((rid) => rid !== Number(id))
            .map((rid) => productos.find((p) => p.id === rid))
            .filter(Boolean)
          ).map((rec) => {
            const imagenSrc = rec.imagen?.startsWith("/") ? rec.imagen : `/${rec.imagen}`;
            return (
              <div key={rec.id} className="card">
                <img src={imagenSrc} alt={rec.nombre} />
                <h4>{rec.nombre}</h4>
                <p>${Number(rec.precio).toLocaleString("es-CL")} CLP</p>
                <Link to={`/detalle/${rec.id}`} className="btn_detalle">Ver Detalles</Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Popup sencillo post-agregado */}
      {mostrarPopup && (
        <div id="popup-carrito" className="popup-oculto" style={{ display: "flex" }}>
          <div className="popup-contenido">
            {(() => {
              const imagenSrc = producto.imagen?.startsWith("/") ? producto.imagen : `/${producto.imagen}`;
              return <img id="popup-imagen" src={imagenSrc} alt={producto.nombre} />;
            })()}
            <h4 id="popup-nombre">{producto.nombre}</h4>
            <p id="popup-precio">${Number(producto.precio).toLocaleString("es-CL")} CLP</p>
            <p>¿Qué deseas hacer?</p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <button className="btn btn-outline-primary" onClick={() => setMostrarPopup(false)}>
                Seguir comprando
              </button>
              <Link to="/carrito" className="btn btn-success" onClick={() => setMostrarPopup(false)}>
                Ir al carrito
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Detalle;