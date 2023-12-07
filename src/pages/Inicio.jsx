import { FaPaintBrush, FaUsers, FaMedal, FaCogs } from "react-icons/fa";

function Inicio() {
  return (
    <>
      <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-inner"
              style={{ backgroundImage: "url(assets/images/slide-01.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="header-text">
                      <h2>
                        El arte <em>de</em> crear con <em>maderas</em>
                      </h2>
                      <div className="div-dec"></div>
                      <h4 style={{ color: "white" }}>
                        Todo en muebles: Armarios,mesas para cocina,bases para
                        cama, sillas. Maderas selectas de Pino, Caoba, Encino,
                        Maple, Cedro
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="services" id="services" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="service-item"
                style={{ background: "radial-gradient(#525c66, #212741)" }}
              >
                <img
                  src="../../../assets/images/diseno-exclusivo.jpeg"
                  alt=""
                  className="img-fluid "
                  style={{ height: "15rem", width: "auto" }}
                />
                <h4 style={{ color: "white" }}>Diseños Exclusivos </h4>
                <p style={{ color: "white" }}>
                  Realizamos los mejores diseños, nuestros productos son unicos
                  y exclusivos, todos nuestros muebles estan hechos en maderas
                  selectas con mano de obra calificada.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-item"
                style={{ background: "radial-gradient(#525c66, #212741)" }}
              >
                <img
                  src="../../../assets/images/15anos.png"
                  alt=""
                  className="img-fluid mx-auto"
                  style={{ height: "17rem", width: "auto" }}
                />
                <h4 style={{ color: "white" }}>Experiencia</h4>
                <p style={{ color: "white" }}>
                  Mas de 15 años nos respaldan diseñando y creando los mejores
                  muebles a nivel local y nacional.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-item"
                style={{ background: "radial-gradient(#525c66, #212741)" }}
              >
                <img
                  src="../../../assets/images/calidad.jpg"
                  alt=""
                  className="img-fluid "
                  style={{ height: "15rem", width: "auto" }}
                />
                <h4 style={{ color: "white" }}>Estándares de calidad</h4>
                <p style={{ color: "white" }}>
                  Los muebles son fabricados por manos expertas, nuestros
                  maestros carpinteros cuentan con las instalaciones necesarias.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="service-item"
                style={{ background: "radial-gradient(#525c66, #212741)" }}
              >
                <img
                  src="../../../assets/images/servicios.jpg"
                  alt=""
                  className="img-fluid "
                  style={{ height: "15rem", width: "auto" }}
                />
                <h4 style={{ color: "white" }}>Variedad de servicios</h4>
                <p style={{ color: "white" }}>
                  Ofrecemos una variedad de servicios para satisfacer las
                  necesidades de nuestros clientes, desde escaleras, puertas,
                  sillas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="simple-cta">
        <div className="container">
          <div className="row">
            <div>
              <h4 className="text-center">
                ¿Tienes algún proyecto con el que podamos ayudarte?
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section id="calculator" className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="left-image">
                <img src="assets/images/calculator-image.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h4>Ponte en contacto</h4>
              </div>
              <form id="calculate" action="" method="get">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="name">Nombre</label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder=""
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label htmlFor="email">Correo</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder=""
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Mensaje</label>
                      <input
                        type="subject"
                        name="subject"
                        id="subject"
                        placeholder=""
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="chooseOption" className="form-label">
                        Razon
                      </label>
                      <select
                        name="Category"
                        className="form-select"
                        aria-label="Default select example"
                        id="chooseOption"
                        onChange={() => this.form.click()}
                      >
                        <option selected>Escoge una opcion</option>
                        <option defaultValue="Financial Control">
                          Cotizacion
                        </option>
                        <option defaultValue="Yearly Profit">
                          Sobrepedido
                        </option>
                        <option defaultValue="Crypto Investment">
                          Inventario
                        </option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Enviar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
