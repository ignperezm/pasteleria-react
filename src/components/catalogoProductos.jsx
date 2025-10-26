function catalogoProductos() {
  return (
    <main className="contenedor">
      {/* Filtros para productos */}
      <aside className="filtros">
        <h3>Categorías</h3>
        <ul>
          <li><input type="checkbox" name="categoria" value="Tortas Cuadradas" /> Tortas Cuadradas</li>
          <li><input type="checkbox" name="categoria" value="Tortas Circulares" /> Tortas Circulares</li>
          <li><input type="checkbox" name="categoria" value="Postres individuales" /> Postres individuales</li>
          <li><input type="checkbox" name="categoria" value="Productos Sin Azúcar" /> Productos Sin Azúcar</li>
          <li><input type="checkbox" name="categoria" value="Pastelería tradicional" /> Pastelería tradicional</li>
          <li><input type="checkbox" name="categoria" value="Productos sin gluten" /> Productos sin gluten</li>
          <li><input type="checkbox" name="categoria" value="Productos Veganos" /> Productos Veganos</li>
          <li><input type="checkbox" name="categoria" value="Tortas Especiales" /> Tortas Especiales</li>
        </ul>

        <h3>Cantidad de Personas</h3>
        <ul>
          <li><input type="checkbox" name="personas" value="10" /> 10 Personas</li>
          <li><input type="checkbox" name="personas" value="15" /> 15 Personas</li>
          <li><input type="checkbox" name="personas" value="20" /> 20 Personas</li>
          <li><input type="checkbox" name="personas" value="25" /> 25 Personas</li>
        </ul>
      </aside>

      {/* Catálogo de productos */}
      <section className="catalogo">
        <h2>Tortas <span></span></h2>
        <div className="productos-container grid"></div>
      </section>
    </main>
  );
}


export default catalogoProductos;