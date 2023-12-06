import { useState,useEffect } from 'react'
import swal from 'sweetalert';


function Pago() {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [ccv, setCcv] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');

  const [showBankingForm, setShowBankingForm] = useState(false);

  const [data, setData] = useState([]);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    // Get the data from localStorage
    const localStorageData = localStorage.getItem('data');

    // Parse the data as JSON and update the state
    // if (localStorageData) {
      try {
        const parsedData = JSON.parse(localStorageData);
        let total = 0;
        parsedData.forEach((item) => {
          total += item.cantidadAñadida*item.total
        })
        setTotal(total);
        setData(parsedData);
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    // }
  }, []);

  const comprar = async () => {
    if (
      !nombreTitular ||
      !numeroCuenta ||
      !ccv ||
      !mes ||
      !anio
    ) {
      alert('¡Complete todos los campos!');
    } else {
      data.forEach(async (dataCarrito) => {
        const pedido = {
          cantidad: dataCarrito.cantidadAñadida,
          totalprecio: dataCarrito.total * dataCarrito.cantidadAñadida,
          estatusPedido: 1,
          producto_id: dataCarrito.id,
          user_id: localStorage.getItem('user_id'),
          fechaRealizado: new Date().toISOString(),
        };
        console.log(pedido);
  
        try {
          const response = await fetch('https://localhost:7241/api/Pedido', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(pedido),
          });
          if (response.ok) {
            swal("Pedido agregado con éxito!");

            setTimeout(() => {
              // Redirige a la página de inicio
              localStorage.removeItem('data');
              window.location.href = "/pedidos";              // Actualiza el estado de autenticación en la aplicación
            }, 1000); // Adjust the time delay as needed

           
          } else {
            swal("Oops!", "Hubo un error!", "error");
          }
        } catch (error) {
          swal("Oops!", "Hubo un error!", "error");

          console.error('Error al enviar formulario:', error);
        }
      });
  
      // alert('Compra realizada con éxito');
    }
  };
  
  return (
    <div>
      <div className="swiper-container" id="top">
  <div className="swiper-wrapper">
    {/* <div className="swiper-slide"> */}
    <section className="body">
      <section className="container">
      <div className="row">

 {!showBankingForm ? (
      <div className="col-9">
        <div className="card shadow-lg bg-white rounded">
          <div className="card-header">
            <h5>Datos Domiciliarios</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre completo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  name="direccion"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  placeholder="Ingrese su dirección"
                />
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="ciudad">Ciudad</label>
                  <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Ingrese su ciudad"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="codigoPostal">Código Postal</label>
                  <input
                    type="text"
                    className="form-control"
                    name="codigoPostal"
                    value={codigoPostal}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    placeholder="Ingrese su código postal"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese su número de teléfono"
                />
              </div>
            </form>
          </div>
          <button className="btn btn-primary mt-3" onClick={() => setShowBankingForm(true)}>
            Siguiente
          </button>
        </div>
      </div>
 
 ):(

  <div className="col-9">
    <div className="card shadow-lg bg-white rounded" style={{ border: 'none' }}>
      <div className="card-header d-flex align-items-center">
        <button className="btn" onClick={() => setShowBankingForm(false)}>
        « 
        </button>
        <h5 className="m-0">Datos Bancarios</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="nombreTitular">Nombre del Titular de la Cuenta</label>
            <input
              type="text"
              className="form-control"
              name="nombreTitular"
              value={nombreTitular}
              onChange={(e) => setNombreTitular(e.target.value)}
              placeholder="Ingrese el nombre del titular"
            />
          </div>
          <div className="form-group row mt-2">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={numeroCuenta}
                onChange={(e) => setNumeroCuenta(e.target.value)}
                name="numeroCuenta"
                placeholder="Ingrese el número de cuenta"
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                value={ccv}
                onChange={(e) => setCcv(e.target.value)}
                name="ccv"
                placeholder="CCV"
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                name="mes"
                placeholder="mes"
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                value={anio}
                onChange={(e) => setAnio(e.target.value)}
                name="anio"
                placeholder="año"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tipoCuenta">Banco</label>
            <select
              className="form-control"
              id="tipoCuenta"
              // value={tipoCuenta}
              // onChange={(e) => setTipoCuenta(e.target.value)}
            >
              <option value="ahorros">BBVA</option>
              <option value="corriente">Santander</option>
              <option value="corriente">Banamex</option>
              <option value="corriente">Scotiabank</option>
              <option value="corriente">HSBC</option>
              <option value="corriente">Interbank</option>
            </select>
          </div>
        </form>
      </div>
      <button onClick={comprar} className="btn btn-success mt-3">
        Comprar
      </button>
    </div>
  </div>

 )}
  <div className="col-3">
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Resumen de compra</h5>
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center mb-4">
          <p style={{ marginRight: '6em' }}>Productos ({data.length})</p>
          <p>${total}</p>
        </div>
        <div className="d-flex align-items-center mb-4">
          <p style={{ marginRight: '10em' }}>Envio</p>
          <p className="text-success">Gratis</p>
        </div>
        <div className="d-flex align-items-center mb-4">
          <p style={{ marginRight: '10em', fontWeight: 'bold' }}>Total</p>
          <p className="text-success">${total}</p>
        </div>
      </div>
    </div>
  </div>

</div>
     
       
       
      </section>
    </section>
  </div>
</div>;

    </div>
  )
}

export default Pago