import { useState, useEffect } from "react";

function Pedidos() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Puedes ajustar este valor
  const [error, setError] = useState(null);

  useEffect(() => {
    const loginUrl = `https://localhost:7241/api/Pedido/${localStorage.getItem(
      "user_id"
    )}`;

    fetch(loginUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          console.error("pedidos failed:", response.status);
          setError("Por favor, inténtalo de nuevo.");
          throw new Error("Invalid pedidos");
        }

        // Borra el error si ya se ha resuelto la petición
        setError(null);

        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("El correo o contraseña son incorrectos.");
      });
  }, []);

  // Calcula el rango de elementos a mostrar para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula los números de página
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="swiper-container" id="top">
  <div className="swiper-wrapper">
    <section className="body">
      <div className="container mt-5">
        <h5>Lista de Compras</h5>

        <div className="row mb-4 mt-4">
          {currentItems.length > 0 ? (
            currentItems.map((producto) => (
              <div
                key={producto.id}
                className="card shadow-lg p-3 mb-3 bg-white rounded"
              >
                <div className="row no-gutters">
                  <div className="col-md-2 col-xs-12">
                    <img
                      src={producto.producto.imagen}
                      className="card-img img-fluid"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-10 col-xs-12">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-4">
                          <h5 className="card-title font-weight-bold">
                            {producto.producto.nombre}
                          </h5>
                        </div>
                        <div className="col-3">
                          <p className="card-text text-muted">
                            {producto.producto.total} $MXN{" "}
                            <small className="text-muted">
                              x {producto.pedido.cantidad}
                            </small>
                          </p>
                        </div>
                        <div className="col-2">
                          <p className="font-weight-bold mb-0">
                            Total: {producto.pedido.totalprecio} $MXN
                          </p>
                        </div>
                      </div>

                      {producto.pedido.estatusPedido === 1 && (
                        <span className="text-white badge rounded-pill badge-notification bg-primary col-md-2 col-xs-12">
                          Pedido procesado..
                        </span>
                      )}
                      {producto.pedido.estatusPedido === 2 && (
                        <span className="text-white badge rounded-pill badge-notification bg-warning col-md-2 col-xs-12">
                          Pedido enviado
                        </span>
                      )}
                      {producto.pedido.estatusPedido === 3 && (
                        <span className="text-white badge rounded-pill badge-notification bg-success col-md-2 col-xs-12">
                          Pedido entregado
                        </span>
                      )}

                      <div className="row ml-1">
                        <p className="card-text text-muted">
                          <small className="text-muted">
                            anch {producto.producto.ancho} m | larg{" "}
                            {producto.producto.largo} m | alt{" "}
                            {producto.producto.altura} m
                          </small>
                        </p>
                      </div>

                      <div className="row">
                        <div className="col-6">
                          <p className="card-text">
                            <small className="text-muted">
                              Pedido efectuado el: {producto.pedido.fechaRealizado}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-lg bg-white rounded container" style={{ border: "none" }}>
                  <div className="row no-gutters">
                    <div className="col-12">
                      <div className="card-body text-center">
                        <img
                          src="../../../assets/images/not-found.png"
                          className="card-img mb-4"
                          alt="..."
                          style={{ height: "100px", width: "100px" }}
                        />
                        <h4 className="mb-2">¡Haz tu primera compra!</h4>
                        <p className="mb-2">
                          Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.
                        </p>
                        <a className="btn btn-primary" href="/productos">
                          Ver ofertas del día
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pagination justify-content-center">
          <button
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage(
                currentPage < pageNumbers.length
                  ? currentPage + 1
                  : pageNumbers.length
              )
            }
            disabled={currentPage === pageNumbers.length}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  </div>
</div>

    </>
  );
}

export default Pedidos;
