import '../assets/css/estilo.css';

function Home() {
  return (
    <main>
      {/* Título para los productos en carrusel */}
      <section className="titulo-seccion">
        <h2>Productos Destacados</h2>
      </section>

      {/* Tarjetas */}
      <section className="container-fluid my-2">
        <div className="row justify-content-center g-5">

          {/* Tarjeta Torta 1 */}
          <div className="col-md-3">
            <div className="card h-100">
              <img
                src="img/torta7.png"
                className="card-img-top"
                alt="Torta Sin Azúcar de Naranja"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Torta Sin Azúcar de Naranja</h5>
                <p className="card-text">
                  Deliciosa torta sabor naranja natural. Perfecta para quienes buscan opciones sin azúcar.
                </p>
                <a href="detalle.html?id=7" className="btn btn-damasco">Ir al producto</a>
              </div>
            </div>
          </div>

          {/* Tarjeta Torta 2 */}
          <div className="col-md-3">
            <div className="card h-100">
              <img
                src="img/torta6.png"
                className="card-img-top"
                alt="Tiramisú Clásico"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Tiramisú Clásico</h5>
                <p className="card-text">
                  Exquisito tiramisú tradicional italiano. Capas de café y crema que conquistan el paladar.
                </p>
                <a href="detalle.html?id=6" className="btn btn-damasco">Ir al producto</a>
              </div>
            </div>
          </div>

          {/* Tarjeta Torta 3 */}
          <div className="col-md-3">
            <div className="card h-100">
              <img
                src="img/torta8.png"
                className="card-img-top"
                alt="Cheesecake Sin Azúcar"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Cheesecake Sin Azúcar</h5>
                <p className="card-text">
                  Suave cheesecake sin azúcar añadido. Ideal para compartir y disfrutar sin culpa.
                </p>
                <a href="detalle.html?id=8" className="btn btn-damasco">Ir al producto</a>
              </div>
            </div>
          </div>

          {/* Tarjeta Torta 4 */}
          <div className="col-md-3">
            <div className="card h-100">
              <img
                src="img/torta10.png"
                className="card-img-top"
                alt="Tarta de Santiago"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Tarta de Santiago</h5>
                <p className="card-text">
                  Tarta tradicional de almendra con un sabor auténtico. Delicia típica de la pastelería española.
                </p>
                <a href="detalle.html?id=10" className="btn btn-damasco">Ir al producto</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Título para el carrusel */}
      <section className="titulo-seccion">
        <h2>Quizás te interese..</h2>
      </section>

      {/* Carrusel */}
      <div className="carousel-wrapper">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="img/banner1.jpg" className="d-block w-100" alt="torta1" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="img/banner2.jpg" className="d-block w-100" alt="torta2" />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="img/banner3.jpg" className="d-block w-100" alt="torta3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;