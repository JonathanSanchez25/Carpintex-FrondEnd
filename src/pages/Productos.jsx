import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import { useNavigate } from 'react-router-dom';
import './AnimacionHover.css';
import './Pagination.css';


function Productos() {
  const [listFilter, setListFilter] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Puedes ajustar este valor
  let canasta = [];

  // uso de Navigate
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7241/api/Producto'); // Reemplaza con tu punto final de la API
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue válida');
        }
        const result = await response.json();
        setData(result); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Error al obtener los datos:', error);
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
      if (existingItem.cantidadAñadida < existingItem.stock) {
        existingItem.cantidadAñadida = (existingItem.cantidadAñadida || 0) + 1;
      }
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

  // Filtra los datos según la búsqueda y la paginación
  const filteredData = data
    .filter((producto) => producto.nombre.toLowerCase().includes(listFilter.toLowerCase()));

  // Calcula el rango de elementos a mostrar para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula los números de página
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <section className="body">
            <div className="container mt-4">
              <SearchBox setListFilter={setListFilter} />
              {listFilter.trim() !== '' && (
                <div className="row mt-3">
                  <h3>{filteredData.length} resultados de {listFilter}</h3>
                </div>
              )}
              <div className="row">
                {currentItems.map((producto) => (
                  <div key={producto.id} className="col-lg-3 col-md-6  mb-4">
                    <div className="card shadow-lg bg-white rounded cardHover">
                      <img
                        className="card-img-top"
                        src={producto.imagen}
                        alt="Card image cap"
                        style={{ height: '20rem' }}
                        onClick={() => navigate(`/detalleproducto/${producto.id}`)}
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
                            <button
                              className="col btn btn-primary "
                              onClick={() => agregarCanasta(producto.id, producto.nombre, producto.stock, producto.total, producto.largo, producto.ancho, producto.altura, producto.imagen)}>
                              Añadir al carrito
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination">
                <button
                  onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={currentPage === number ? 'active' : ''}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                  disabled={currentPage === pageNumbers.length}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productos;


/*import { useState,useEffect } from 'react';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import { useNavigate } from 'react-router-dom';
import './AnimacionHover.css'; 

function Productos() {
 const [listFilter, setListFilter] = useState('');
 const [data, setData] = useState([]);
let canasta=[];

//uso de Navigate
const navigate = useNavigate();

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
    if(existingItem.cantidadAñadida < existingItem.stock){
    existingItem.cantidadAñadida = (existingItem.cantidadAñadida || 0) + 1;
    }
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
         <SearchBox setListFilter={setListFilter} />
         {listFilter.trim() !== '' && (
                <div className="row mt-3">
                  <h3>{data.filter((producto) => producto.nombre.toLowerCase().includes(listFilter.toLowerCase())).length} resultados de {listFilter}</h3>
                </div>
              )}
           <div className="row">
             {data
               .filter((producto) => producto.nombre.toLowerCase().includes(listFilter.toLowerCase()))
               .map((producto) => (
                 <div key={producto.id} className="col-lg-3 col-md-6  mb-4">
                   <div className="card shadow-lg bg-white rounded cardHover">
                     <img
                       className="card-img-top"
                       src={producto.imagen}
                       alt="Card image cap"
                       style={{ height: '20rem' }}
                       onClick={()=>navigate(`/detalleproducto/${producto.id}`)}
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

export default Productos */