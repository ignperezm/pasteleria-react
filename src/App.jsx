import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'; //importa estilos
//imports propios
import BarraNav from "./components/BarraNav.jsx";
import Footer from "./components/Footer.jsx";
import Contacto from './components/Contacto.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraNav />
      <main style={{ marginTop: "100px" }}>
        {}
        <h1>Bienvenido a Mil Sabores</h1>
      </main>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
      </p>
      <Footer /> {/* o <FooterSocial /> */}
    
    </>
    
  )
}

export default App
