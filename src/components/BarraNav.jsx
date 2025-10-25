import React from "react";

import '../assets/css/estilo.css';

export default function BarraNav() {
  return (
    <header>
            <div className="top-bar">
                <div>
                    <a href="/" className="logo-link">
                    <img src="/img/Logo.png" />
                    </a>
                </div>
                <nav>
                    <a href="productos.html">Productos</a>
                    <a href="nosotros.html">Nosotros</a>
                    <a href="blogs.html">Blogs</a>
                    <a href="/contacto">Contacto</a>
                </nav>
                <div className="acciones">
                    <a href="login.html">Iniciar sesión</a> |
                    <a href="registro.html">Registrar usuario</a> |
                    <a href="carrito.html" className="carrito">Carrito 0</a>
                </div>
            </div>
        </header>
  );
}



