//catalogo de productos
import React, { useMemo, useState } from "react";
import { productos } from "../components/dataProductos";
import ProductosFiltros from "../components/FiltroProductos";
import RenderProductos from "../components/RenderProductos";

function CatalogoProductos() {
  const [categorias, setCategorias] = useState([]);
  const [personas, setPersonas] = useState([]);

  const handleFiltersChange = ({ categorias, personas }) => {
    setCategorias(categorias);
    setPersonas(personas);
  };

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      const matchCat = categorias.length === 0 || categorias.includes(p.categoria);
      const matchPer =
        personas.length === 0 || personas.includes(Number(p.personas));
      return matchCat && matchPer;
    });
  }, [categorias, personas]);

  const totalProductos = productosFiltrados.length;

  return (
    <main className="contenedor">
      {/* Filtros para productos */}
      <ProductosFiltros
        categoriasSeleccionadas={categorias}
        personasSeleccionadas={personas}
        onChange={handleFiltersChange}
      />

      {/* Catálogo de productos */}
      <section className="catalogo">
        <h2>
          Tortas <span>{totalProductos} productos</span>
        </h2>
        <RenderProductos productos={productosFiltrados} />
      </section>
    </main>
  );
}
export default CatalogoProductos;
