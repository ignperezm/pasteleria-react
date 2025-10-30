import React from "react";
import '../assets/css/estilo.css';

function Admin() {
    return (
        <main>
            <section className="admin-section">
                <div className="admin-contenedor">
                    <img src="/img/borde1.png" alt="" className="borde-decorativo izquierda" />
                    <div className="admin-content">
                        <h1>ADMIN</h1>
                    </div>
                    <img src="/img/borde1.png" alt="" className="borde-decorativo derecha" />
                </div>
            </section>

            {/* Sección final decorativa */}
            <section className="texto-final">
                <h2>-ˋˏ ༻❁༺ ˎˊ-</h2>
            </section>
        </main>
    );
}

export default Admin;