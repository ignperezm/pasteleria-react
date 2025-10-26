import React, { useState } from "react";
import '../assets/css/estilo.css';
import '../assets/css/registro.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Registro() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        showConfirmPassword: false
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Mostrar/ocultar contraseña
    const togglePassword = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    // Validar y enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.apellido || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("Por favor completa todos los campos.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        alert(`Registro exitoso ✅\nBienvenido/a ${formData.nombre} ${formData.apellido}`);
        console.log(formData);
    };

    const handleReset = () => {
        setFormData({
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false
        });
    };

    return (
        <section id="formulario" className="registro-section">
            <h1>Crear una cuenta</h1>
            <p className="texto-arriba">
                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
            </p>

            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="apellido">Apellidos:</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Contraseña:</label>
                <div className="password-container">
                    <input
                        type={formData.showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="btn-toggle"
                        onClick={() => togglePassword("showPassword")}
                    >
                        {formData.showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                </div>

                <label htmlFor="confirmPassword">Confirmar contraseña:</label>
                <div className="password-container">
                    <input
                        type={formData.showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="btn-toggle"
                        onClick={() => togglePassword("showConfirmPassword")}
                    >
                        {formData.showConfirmPassword ? "Ocultar" : "Mostrar"}
                    </button>
                </div>

                <input type="submit" value="Guardar" className="btn-guardar" />
                <input type="reset" value="Limpiar" className="btn-limpiar" />
            </form>
        </section>
    );
}

export default Registro;
