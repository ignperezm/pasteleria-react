import React from "react";
import '../assets/css/estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Nosotros() {
    return (
        <main className="nosotros-page">
            <section className="nosotros-section">
                <h1>¿Quiénes Somos?</h1>
                <article className="nosotros-articulo">
                    <p>
                        Pastelería Mil Sabores nació hace más de cinco décadas con el sueño de compartir momentos dulces
                        y memorables con cada familia chilena. Desde nuestros inicios en una pequeña cocina de barrio
                        hasta convertirnos en un referente nacional, hemos mantenido intacta nuestra pasión por la
                        repostería artesanal, la calidad de nuestros ingredientes y el cariño en cada preparación.
                    </p>
                    <p>
                        En 1995, fuimos parte de un hito histórico: la creación de la torta más grande del mundo, un récord Guinness
                        que no solo nos llenó de orgullo, sino que reafirmó nuestro compromiso con la creatividad y la colaboración
                        comunitaria.
                    </p>
                    <p>
                        Hoy, celebramos nuestro 50 aniversario con una mirada al futuro. Renovamos nuestra plataforma digital para que
                        nuestros clientes puedan disfrutar de nuestras delicias desde cualquier rincón del país, con opciones personalizadas,
                        beneficios especiales y una experiencia de compra cálida y cercana.
                    </p>
                    <p>
                        Más que una pastelería, somos un espacio de encuentro, tradición y aprendizaje. Apoyamos activamente a
                        estudiantes de gastronomía, compartimos recetas, consejos y promovemos el talento local. Cada compra que haces con nosotros
                        es también un aporte a la formación de nuevos reposteros que sueñan con transformar el mundo, un pastel a la vez.
                    </p>
                    <p>
                        Bienvenidos a Mil Sabores. Donde cada torta tiene una historia, y cada historia merece ser celebrada.
                    </p>

                    <div className="imagen-container">
                        <img
                            src="/img/pastelerosnosotros.jpg"
                            alt="quienes somos"
                            className="imagen-nosotros"
                        />
                    </div>
                </article>
            </section>

            {/* Footer */}
            <footer className="text-white text-center py-4 position-relative footer-custom">
                <div className="footer-logo">Mil Sabores</div>
                <div className="container">
                    <p className="mb-2">Encuéntranos en:</p>
                    <div className="d-flex justify-content-center gap-3 mb-3">
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white">
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://duoc.cl/" target="_blank" rel="noreferrer" className="text-white">
                            <i className="bi bi-building"></i>
                        </a>
                    </div>
                    <p className="mb-0">© 2025 Pastelería Mil Sabores. Todos los derechos reservados.</p>
                </div>
            </footer>
        </main>
    );
}

export default Nosotros;
