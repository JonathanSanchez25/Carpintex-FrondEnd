import  { useState, useEffect } from 'react';
function Carrito() {
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
function agregar(idProducto){
  let cantidad,total=0;
  let updatedData;
  const data = JSON.parse(localStorage.getItem('data')) || [];
   updatedData = data.find((item) => item.id === idProducto);

  if(updatedData.cantidadAñadida<updatedData.stock){
    cantidad=updatedData.cantidadAñadida+1;
    updatedData.cantidadAñadida=cantidad;
  }
  updatedData=data;


  data.forEach((item) => {
    total += item.cantidadAñadida*item.total
  })
  setTotal(total);

  localStorage.setItem('data', JSON.stringify(updatedData));
  setData(updatedData);
}

function quitar(idProducto){
  let cantidad=0;
  let updatedData;
  const data = JSON.parse(localStorage.getItem('data')) || [];
   updatedData = data.find((item) => item.id === idProducto);

   setTotal(total-updatedData.total);
   

  cantidad=updatedData.cantidadAñadida-1;
  updatedData.cantidadAñadida=cantidad;
  if(updatedData.cantidadAñadida==0){
     updatedData = data.filter((item) => item.id !== idProducto);
  }else{
    updatedData=data;
  }




  localStorage.setItem('data', JSON.stringify(updatedData));
  setData(updatedData);

}
function eliminar(idProducto){
  let totalDinero=0;
  const localData = JSON.parse(localStorage.getItem('data')) || [];
  const updatedData = localData.filter((item) => item.id !== idProducto);
  const findData = localData.filter((item) => item.id === idProducto);
  totalDinero=findData[0].total*findData[0].cantidadAñadida;
  localStorage.setItem('data', JSON.stringify(updatedData));
  setData(updatedData);
  setTotal(total-totalDinero);

}
function comprar(){
}
  return (
<div className="swiper-container" id="top">
  <div className="swiper-wrapper">
    <section className="body">
      <section className="container">
        <div className={data ? 'row' : 'row'}>
          {data ? (
            data.length == 0 ? (
              <div className="col-9">
              <div className="card shadow-lg bg-white rounded container" style={{ border: 'none' }}>
                <div className="row no-gutters">
                  <div className="card-header">
                    <h5>Productos</h5>
                  </div>
                  <div className="col-12">
                    <div className="card-body text-center">
                      <img src="../../../assets/images/bolsas-de-compra.png" className="card-img mb-4" alt="..." style={{ height: '100px', width: '100px' }} />
                      <p className="mb-2">¡Empieza un carrito de compras!</p>
                      <a className="btn btn-primary" href="/productos">Descubrir productos</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>          
             ) : (
              <div className="col-9">
                <div className="card shadow-lg bg-white rounded container" style={{ border: 'none' }}>
                  <div className="row no-gutters">
                    <div className="card-header">
                      <h5>Productos</h5>
                    </div>
                    <div className="col-12">
                      {data.map((producto) => (
                        <div key={producto.id} className="card-body">
                          <div className="d-flex align-items-center">
                            <img src={producto.imagen} className="card-img" alt="..." style={{ height: '100px', width: '100px' }} />
                            <p className="card-title text-black font-weight-bold" style={{ marginLeft: '1em' }}>{producto.nombre}</p>
                            <div style={{ borderRadius: '1em', border: '1px solid rgb(145, 145, 145)' }}>
                              <button className="btn col-1" onClick={() => agregar(producto.id)}>+</button>
                              <input className="text-center" style={{ width: '3em', border: '0px' }} value={producto.cantidadAñadida} readOnly />
                              <button className="btn col-1" onClick={() => quitar(producto.id)}>-</button>
                            </div>
                            <p className="card-text text-muted" style={{ margin: '1em' }}><small className="text-muted">anch {producto.ancho} m | larg {producto.largo} m | alt {producto.altura} m</small></p>
                            <p className="font-weight-bold" style={{ margin: '0.5em' }}>${(producto.total * producto.cantidadAñadida).toFixed(2)} MXN</p>
                            <button className="btn text-danger" onClick={() => eliminar(producto.id)}>Eliminar</button>
                          </div>
                          <hr style={{ border: '0.5px solid black' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="col-9">
              <div className="card shadow-lg bg-white rounded container" style={{ border: 'none' }}>
                <div className="row no-gutters">
                  <div className="card-header">
                    <h5>Productos</h5>
                  </div>
                  <div className="col-12">
                    <div className="card-body text-center">
                      <img src="../../../assets/images/bolsas-de-compra.png" className="card-img mb-4" alt="..." style={{ height: '100px', width: '100px' }} />
                      <p className="mb-2">¡Empieza un carrito de compras!</p>
                      <a className="btn btn-primary" href="/productos">Descubrir productos</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

      <div className="col-3">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Resumen de compra</h5>
        </div>
        <div className="card-body">
  {total > 0 ? (
    <div>
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
      <a href="#" className="btn btn-primary" onClick={comprar}>
        Continuar compra
      </a>
    </div>
  ) : (
      <p>Agrega a tu carrito para obtener tu resumen de compra</p>
  )}
</div>

      </div>
    </div>

      



        </div>
      </section>
    </section>
  </div>
</div>
  )
}

export default Carrito