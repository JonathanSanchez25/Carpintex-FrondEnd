import React from "react";
import { useParams } from "react-router-dom";

const agregarCanasta = (
  id,
  nombre,
  stock,
  total,
  largo,
  ancho,
  altura,
  imagen
) => {
  let canasta = JSON.parse(localStorage.getItem("data")) || [];

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

  localStorage.setItem("data", JSON.stringify(canasta));
};

const DetalleProducto = () => {
  const { id } = useParams();

  const [dataProduct, setDataProduct] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://localhost:7241/api/Producto/${id}`
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setDataProduct(result); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  /* const dataProduct = {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 100,
        stock: 5,
        imagen: 'https://picsum.photos/200/300',
        altura: 2,
  ancho: 2,
  largo: 0.5,
        // Puedes agregar más detalles según la estructura de tu objeto dataProduct
    }*/

  return (
    <>
      <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <section className="body">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={dataProduct.imagen}
                    alt={dataProduct.nombre}
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title text-primary">
                        {dataProduct.nombre}
                      </h2>
                      <h4 className="card-subtitle mb-2 text-muted">
                        {dataProduct.categoria}
                      </h4>
                      <p className="card-text">
                        <strong>Descripción:</strong> {dataProduct.descripcion}
                      </p>
                      <p className="card-text">
                        <strong>Dimensiones:</strong> {dataProduct.largo} x{" "}
                        {dataProduct.ancho} x {dataProduct.altura} m
                      </p>
                      <p className="card-text">
                        <strong>Disponibilidad:</strong> {dataProduct.stock}{" "}
                        unidades
                      </p>
                      <p className="card-text">
                        <strong>Precio:</strong> ${dataProduct.total}
                      </p>
                      <p className="card-text">
                        {dataProduct.stock > 0 ? (
                          <strong className="text-primary">
                            ¡Solo quedan {dataProduct.stock}!
                          </strong>
                        ) : (
                          <strong className="text-danger">
                            ¡Ya no hay stock, te avisaremos cuando vuelva!
                          </strong>
                        )}
                      </p>
                      {/* Puedes agregar más detalles según la estructura de tu objeto dataProduct */}
                      {dataProduct.stock > 0 && (
                        <button
                          className="btn btn-primary mt-3"
                          onClick={() =>
                            agregarCanasta(
                              dataProduct.id,
                              dataProduct.nombre,
                              dataProduct.stock,
                              dataProduct.total,
                              dataProduct.largo,
                              dataProduct.ancho,
                              dataProduct.altura,
                              dataProduct.imagen
                            )
                          }
                        >
                          Añadir al carrito
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
