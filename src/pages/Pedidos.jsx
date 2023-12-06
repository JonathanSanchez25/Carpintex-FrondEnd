import Footer from "../components/Footer";
import { useEffect, useState } from "react";
function Pedidos() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loginUrl = `https://localhost:7241/api/Pedido/${localStorage.getItem("user_id")}`;
  
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
  })

  return (
    <>
    <div className="swiper-container" id="top">
      <div className="swiper-wrapper">
        <section className="body">
          <div className="container mt-5">
            <h5>Lista de Compras</h5>

            <div className="row mb-4 mt-4">
              {data.length > 0 ? (
                data.map((producto) => (
                  <div key={producto.id} className="card shadow-lg p-3 mb-3 bg-white rounded">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <img
                          src={producto.producto.imagen}
                          className="card-img"
                          alt="..."
                          style={{ height: '130px', width: '200px' }}
                        />
                      </div>
                      <div className="col-md-10" style={{ paddingLeft: '4em' }}>
                        <div className="card-body">
                          <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="col-4">
                              <h5 className="card-title font-weight-bold">{producto.producto.nombre}</h5>
                            </div>
                            <div className="col-3">
                              <p className="card-text text-muted">
                                {producto.producto.total} $MXN <small className="text-muted">x {producto.pedido.cantidad}</small>
                              </p>
                            </div>
                            <div className="col-2">
                              <p className="font-weight-bold mb-0">Total: {producto.pedido.totalprecio} $MXN</p>
                            </div>
                          </div>

                          {producto.pedido.estatusPedido === 1 && (
      <span className='text-white badge rounded-pill badge-notification bg-primary col-2'>
        Pedido procesado..
      </span>
    )}
    {producto.pedido.estatusPedido === 2 && (
      <span className='text-white badge rounded-pill badge-notification bg-warning col-2'>
        Pedido enviado
      </span>
    )}
    {producto.pedido.estatusPedido === 3 && (
      <span className='text-white badge rounded-pill badge-notification bg-success col-2'>
        Pedido entregado
      </span>
    )}
                           
<div className="row ml-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <p className="card-text text-muted">
    <small className="text-muted">
      anch {producto.producto.ancho} m | larg {producto.producto.largo} m | alt {producto.producto.altura} m
    </small>
  </p>
</div>

<div className="row" style={{ display: 'flex', alignItems: 'center' }}>
  <div className="col-6">
    <p className="card-text">
      <small className="text-muted">Pedido efectuado el: {producto.pedido.fechaRealizado}</small>
    </p>
  </div>
  {/* <div className="col-6">
    <span className="text-white badge rounded-pill badge-notification bg-success col-6">Pagado</span>
  </div> */}
</div>


                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="card shadow-lg bg-white rounded container" style={{ border: 'none' }}>
                      <div className="row no-gutters">
                        <div className="col-12">
                          <div className="card-body text-center">
                            <img src="../../../assets/images/not-found.png" className="card-img mb-4" alt="..." style={{ height: '100px', width: '100px' }} />
                            <h4 className="mb-2">¡Haz tu primera compra!</h4>
                            <p className="mb-2">Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.</p>
                            <a className="btn btn-primary" href="/productos">Ver ofertas del día</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
          <Footer />
</>
    )
}

export default Pedidos