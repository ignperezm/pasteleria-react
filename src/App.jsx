import { useState }  from 'react'
import './App.css'; //importa estilos

//imports propios
import BarraNav from "./components/BarraNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from './components/Home.jsx';
import Contacto from './components/Contacto.jsx';
import Blogs from "./components/Blogs.jsx";
import Productos from "./components/catalogoProductos.jsx";
import Login from './components/login.jsx';
import Registro from './components/Registro.jsx';
import Nosotros from './components/Nosotros.jsx';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
        <BarraNav />
      <main style={{ marginTop: "100px" }}>
        {}
        <h1>Bienvenido a Mil Sabores</h1>
      </main>
   

    <Router> 
      <BarraNav />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/registro' element={<Registro/>}/> 
        <Route path='/nosotros' element={<Nosotros/>}/> 




      </Routes>  
       <Footer /> {/* o <FooterSocial /> */}
    </Router>
 
    </>
    
  )
}

export default App
