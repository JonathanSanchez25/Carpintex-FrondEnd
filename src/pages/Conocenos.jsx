import Footer from "../components/Footer";
function Conocenos() {
    return (
      <>
        <div className="swiper-container" id="top">
          <div className="swiper-wrapper">
            <section className="body">
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="text-center">LO QUE HACEMOS</h3>
                      <hr className="black-line" />
                      <div className="row mt-4">
                        <div className="col-12">
                          <p className="text-justify">
                            Somos una empresa dedicada a la fabricación, venta de muebles de madera para cocina, baños, interiores, salas, recamaras, etc. Debido a nuestros altos estándares de calidad trabajamos para distintos clientes; particulares, estudios, constructoras y empresas. Además, proporcionamos nuestra sólida experiencia y vastos conocimientos, ¡No dude en contactarnos!
                          </p>
                        </div>
                      </div>
                      <hr className="black-line" />
                      <div className="row">
                        <div className="col-12">
                          <p className="text-justify">
                            En Diseño en Carpintería nos preocupamos por el confort, la estética y la belleza de su lugar. Por este motivo, nuestra dedicación se refleja desde la atención a cada detalle de nuestros productos y atención profesional de todos nuestros trabajos.
                          </p>
                        </div>
                      </div>
                    </div>
  
                    <div className="col-lg-6 mb-3">
                      <img src="../../../assets/images/imgW.jpg" className="rounded float-right" alt="..." />
                    </div>
                  </div>
                </div>
              </section>
  
              <div className="linea">
                <div className="row">
                  <div className="col-4 mt-4 text-center">
                  <span style={{ fontFamily: 'Raleway, Arial, Helvetica, sans-serif' }} className="texto">  Años en el rubro</span>
                  </div>                   

                  <div className="col-4 mt-4 text-center">
                    <span style={{ fontFamily: 'Raleway, Arial, Helvetica, sans-serif' }} className="texto">+  Clientes satisfechos</span>
                  </div>
                  <div className="col-4 mt-4 text-center">
                    <span style={{ fontFamily: 'Raleway, Arial, Helvetica, sans-serif' }} className="texto">+  Productos fabricados</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
       <Footer/>
      </>
    );
  }
  
  export default Conocenos;
