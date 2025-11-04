import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BarraNav from "./components/BarraNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from './components/Home.jsx';
import Contacto from './components/Contacto.jsx';
import Blogs from "./components/Blogs.jsx";
import Login from './components/login.jsx';
import Registro from './components/Registro.jsx';
import Nosotros from './components/Nosotros.jsx';
import Productos from './components/Productos.jsx';
import Detalle from './components/Detalle.jsx';
import Admin from './components/Admin.jsx'
import Carrito from './components/Carrito.jsx'
import DesplazarArriba from './components/DesplazarArriba.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="fondo-home">
      <Router>
        <DesplazarArriba />
        {/* Barra de navegación siempre visible */}
        <BarraNav />

        {/* Contenido principal */}
        <main style={{ marginTop: "80px" }}>
          {/* Rutas de páginas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            
            <Route path="/detalle/:id" element={<Detalle />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

