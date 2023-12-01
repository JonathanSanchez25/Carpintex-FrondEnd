import { useState,useEffect } from 'react';
import Footer from '../components/Footer';
function Productos() {
 const [listFilter, setListFilter] = useState('');
 const [loadingStates, setLoadingStates] = useState({});
 const [data, setData] = useState([]);
let canasta=[];

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7241/api/Producto'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 


 const handleInputChange = (event) => {
   setListFilter(event.target.value);
 };

 const agregarCanasta = (id, nombre, stock, total, largo, ancho, altura, imagen) => {
  let canasta = JSON.parse(localStorage.getItem('data')) || [];

  const existingItem = canasta.find((item) => item.id === id);

  if (existingItem) {
    existingItem.cantidadAñadida = (existingItem.cantidadAñadida || 0) + 1;
  } else {
    canasta.push({
      id,
      nombre,
      stock,
      total,
      largo,
      ancho,
      altura,
      imagen,
      cantidadAñadida: 1,
    });
  }

  localStorage.setItem('data', JSON.stringify(canasta));
};


 return (
    <>
   <div className="swiper-container" id="top">
     <div className="swiper-wrapper">
       <section className="body">
         <div className="container mt-4">
           <div className="row justify-content-center mb-4">
             <div className="col-lg-6 col-md-8 col-sm-10 col-12 mb-4">
               <div className="input-group">
                 <input
                   value={listFilter}
                   onChange={handleInputChange}
                   className="form-control"
                   name="filter"
                   type="text"
                 />
                 <button className="btn btn-outline-secondary" type="button">
                   <i className="fa fa-search" aria-hidden="true"></i>
                 </button>
               </div>
             </div>
           </div>
           <div className="row">
             {data
               .filter((producto) => producto.nombre.toLowerCase().includes(listFilter.toLowerCase()))
               .map((producto) => (
                 <div key={producto.id} className="col-lg-3 col-md-5 col-sm-2 col-6 mb-4">
                   <div className="card shadow-lg bg-white rounded">
                     <img
                       className="card-img-top"
                       src={producto.imagen}
                       alt="Card image cap"
                       style={{ height: '20rem' }}
                     />
                     <div className="card-body">
                       <h5 className="card-title">{producto.nombre}</h5>

                       {producto.stock > 0 ? (
                         <p className="text-primary">¡Solo quedan {producto.stock}!</p>
                       ) : (
                         <p className="text-danger">¡Ya no hay stock, te avisaremos cuando vuelva!</p>
                       )}

                       <div className="row">
                         <p className="col">{producto.altura} m alt | {producto.ancho} m anch</p>
                       </div>
                       <div className="row">
                         <p className="col">$ {producto.total}</p>
                       </div>
                       <div className="row">
                       {producto.stock > 0 && (
                         <button className="col btn btn-primary " onClick={() => agregarCanasta(producto.id, producto.nombre, producto.stock, producto.total, producto.largo, producto.ancho, producto.altura, producto.imagen)}>Añadir al carrito</button>
                       )}
                       </div>
                                  
                     </div>
                   </div>
                 </div>
               ))}
           </div>
         </div>
       </section>
     </div>
   </div>
   <Footer />
   </>
 );
}

export default Productos