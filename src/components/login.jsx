import React, { useState } from "react";
import '../assets/css/estilo.css';
import '../assets/css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Mostrar/ocultar contraseña
    const togglePassword = () => {
        setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
    };

    // Validación del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Aquí podrías agregar la lógica de login real
        alert(`Inicio de sesión exitoso ✅\nBienvenido ${formData.email}`);
        console.log(formData);
    };

    // Reset del formulario
    const handleReset = () => {
        setFormData({ email: "", password: "", showPassword: false });
    };

    return (
        <section id="formulario" className="login-section">
            <h1>Iniciar sesión</h1>
            <p className="texto-arriba">
                ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
            </p>

            <form onSubmit={handleSubmit} onReset={handleReset}>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ejemplo@duoc.cl"
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
                        onClick={togglePassword}
                    >
                        {formData.showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                </div>

                <input type="submit" value="Iniciar sesión" className="btn-guardar" />
                <input type="reset" value="Limpiar" className="btn-limpiar" />

                <div className="texto-links">
                    <p><a href="/admin_login">Iniciar sesión como Administrador</a></p>
                    <p><a href="#">¿Olvidó su contraseña?</a></p>
                </div>
            </form>
        </section>
    );
}

export default Login;
