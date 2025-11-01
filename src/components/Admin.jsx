import React, { useState } from 'react';
import '../assets/css/estilo.css';
import { loginService } from './loginServicio';

function Admin() {
    const [metrics] = useState({
        ventasHoy: { monto: '$840.500', crecimiento: '+12%' },
        productosStock: { total: '16', bajos: '3' },
        pedidosPendientes: { total: '12', urgentes: '2' }
    });

    const [productos] = useState([
        { nombre: 'Cheesecake Sin Azúcar', precio: 47000, stock: 15, vendidos: 142 },
        { nombre: 'Tiramisú Clásico', precio: 5500, stock: 8, vendidos: 89 },
        { nombre: 'Torta Sin Azúcar de Naranja', precio: 48000, stock: 12, vendidos: 203 },
        { nombre: 'Tarta de Santiago', precio: 6000, stock: 5, vendidos: 67 }
    ]);

    /* BOTONES ADMIN FUNCION */

    const [modalActivo, setModalActivo] = useState(null);
    const [formData, setFormData] = useState({});

    const abrirModal = (tipo) => {
        setModalActivo(tipo);
        setFormData({});
    };

    const cerrarModal = () => {
        setModalActivo(null);
        setFormData({});
    };

    const guardar = () => {
    try {
        if (modalActivo === 'usuarios') {
            if (!formData.email || !formData.password) {
                alert('❌ Completa email y contraseña');
                return;
            }
            // ✅ LLAMAR AL SERVICIO REAL
            loginService.agregarUsuario(formData.email, formData.password);
            alert('✅ Usuario guardado exitosamente');
        } else if (modalActivo === 'productos') {
            if (!formData.nombre || !formData.precio || !formData.descripcion) {
                alert('❌ Completa todos los campos');
                return;
            }
            // ✅ LLAMAR AL SERVICIO REAL (necesitas productosService)
            // productosService.agregarProducto({...});
            alert('✅ Producto guardado exitosamente');
        }
        cerrarModal();
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    }
};

const eliminar = () => {
    try {
        if (modalActivo === 'usuarios') {
            if (!formData.email) {
                alert('❌ Ingresa el email del usuario a eliminar');
                return;
            }
            if (!window.confirm(`¿Estás seguro de eliminar al usuario ${formData.email}?`)) return;
            
            // ✅ LLAMAR AL SERVICIO REAL
            loginService.eliminarUsuario(formData.email);
            alert('✅ Usuario eliminado exitosamente');
        } else if (modalActivo === 'productos') {
            if (!formData.nombre) {
                alert('❌ Ingresa el nombre del producto a eliminar');
                return;
            }
            if (!window.confirm(`¿Estás seguro de eliminar el producto "${formData.nombre}"?`)) return;
            
            // ✅ LLAMAR AL SERVICIO REAL (necesitas productosService)
            // productosService.eliminarProducto(formData.nombre);
            alert('✅ Producto eliminado exitosamente');
        }
        cerrarModal();
    } catch (error) {
        alert(`❌ Error: ${error.message}`);
    }
};

    

    /* BOTONES ADMIN FUNCION */



    return (
        <main>
            {/* img bienvenida */}
            <div className="imgcss-bienvenida">
                <img src="/img/pastel_index_01.jpg" alt="" className="img-bienvenida" />
                <div className="texto-bienvenida">Panel de Administración</div>
            </div>

            {/* acciones */}
            <section className="acciones-section">
                <h2>Acciones Administrador ❧</h2>
                <div className="botones-acciones">
                    <button className="btn-admin primary" onClick={() => abrirModal('productos')}>➤ Gestionar Productos
                    </button>
                    <button className="btn-admin warning" onClick={() => abrirModal('usuarios')}>➤ Gestionar Usuarios
                    </button>
                </div>
            </section>


            {/* contenido */}
            <section className="dashboard-section">
                <h2>Métricas de negocio ❧</h2>
                <div className="metricas-grid">
                    <div className="metrica-card">
                        <h3>✦ Ventas Hoy</h3>
                        <div className="metrica-valor">{metrics.ventasHoy.monto}</div>
                        <div className="metrica-tendencia positivo">{metrics.ventasHoy.crecimiento}</div>
                    </div>
                    <div className="metrica-card">
                        <h3>✦ Productos en Stock</h3>
                        <div className="metrica-valor">{metrics.productosStock.total}</div>
                        <div className="metrica-alerta">{metrics.productosStock.bajos} bajos</div>
                    </div>
                    <div className="metrica-card">
                        <h3>✦ Pedidos Pendientes</h3>
                        <div className="metrica-valor">{metrics.pedidosPendientes.total}</div>
                        <div className="metrica-urgente">{metrics.pedidosPendientes.urgentes} urgentes</div>
                    </div>
                </div>
            </section>

            {/* destacados */}
            <section className="tabla-section">
            <h2>Productos más vendidos ❧</h2>
            <div className="tabla-productos">
                <div className="tabla-header">
                    <span>Producto</span>
                    <span>Precio</span>
                    <span>Stock</span>
                    <span>Vendidos</span>
                </div>
                {productos.map((producto, index) => (
                    <div key={`producto-${index}`} className="tabla-fila"> {/* ✅ AGREGAR KEY */}
                        <span>{producto.nombre}</span>
                        <span>${producto.precio.toLocaleString()}</span>
                        <span className={producto.stock < 10 ? 'stock-bajo' : ''}>
                            {producto.stock} unidades
                        </span>
                        <span className="vendidos">{producto.vendidos}</span>
                    </div>
                ))}
            </div>
        </section>















            {/* --- MODAL AGREGADO --- */}
            {modalActivo && (
                <div className="modal-overlay">
                    <div className="modal-admin">
                        <div className="modal-header">
                            <h3>
                                {modalActivo === 'usuarios' ? '➤ Gestión de Usuarios' : '➤ Gestión de Productos'}
                            </h3>
                            <button className="btn-cerrar" onClick={cerrarModal}>✕</button>
                        </div>

                        <div className="modal-body">
                            {modalActivo === 'usuarios' ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        value={formData.nombre || ''}
                                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Apellidos"
                                        value={formData.apellidos || ''}
                                        onChange={(e) => setFormData({...formData, apellidos: e.target.value})}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email del usuario"
                                        value={formData.email || ''}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        value={formData.password || ''}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    />
                                </>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Nombre del producto"
                                        value={formData.nombre || ''}
                                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Precio"
                                        value={formData.precio || ''}
                                        onChange={(e) => setFormData({...formData, precio: e.target.value})}
                                    />
                                    <textarea
                                        placeholder="Descripción"
                                        value={formData.descripcion || ''}
                                        onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                                        rows="3"
                                    />
                                </>
                            )}
                        </div>

                        <div className="modal-actions">
                            <button className="btn-guardar" onClick={guardar}>
                                💾 Guardar
                            </button>
                            <button className="btn-eliminar" onClick={eliminar}>
                                🗑️ Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}






























            <section className="texto-final">
                <h2>-ˋˏ ༻❁༺ ˎˊ-</h2>
            </section>
        </main>
    );
}

export default Admin;