import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  const [regUsuario, setRegUsuario] = useState({
    name: "",
    email: "",
    calle: "",
    estado: "",
    codigopostal: "",
    ciudad: "",
    passwordUsuario: "",
    activo: true,
    rol_id: 2,
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  async function register() {
    try {
      const response = await fetch("https://localhost:7241/api/Usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regUsuario),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Limpia el formulario después de un registro exitoso
      setRegUsuario({
        name: "",
        email: "",
        calle: "",
        estado: "",
        codigopostal: "",
        ciudad: "",
        passwordUsuario: "",
        activo: true,
        rol_id: 2,
      });

      // Borra el error si ya se ha resuelto la petición
      setError(null);

      // Redirige a la página de inicio de sesión
      navigate("/login");
      
    } catch (error) {
      console.error("Error posting data:", error);
      setError("Ocurrió un error durante el registro. Por favor, inténtalo de nuevo más tarde.");
    }
  }

  return (
    <>
      <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <section className="login">
            <div className="signup_box">
              <div className="left">
                <div className="contact">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      register();
                    }}
                  >
                    <h3 style={{ textAlign: "center" }}>Crear Cuenta</h3>
                    <input
                      type="text"
                      name="nombre"
                      value={regUsuario.name}
                      onChange={(e) =>
                        setRegUsuario({ ...regUsuario, name: e.target.value })
                      }
                      placeholder="Nombre"
                      pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                      title="Ingresa solo letras, espacios y acentos"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(
                          /[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g,
                          ""
                        ))
                      }
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={regUsuario.email}
                      onChange={(e) =>
                        setRegUsuario({ ...regUsuario, email: e.target.value })
                      }
                      placeholder="Correo"
                    />
                    <div className="row">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name="estado"
                          value={regUsuario.estado}
                          onChange={(e) =>
                            setRegUsuario({
                              ...regUsuario,
                              estado: e.target.value,
                            })
                          }
                          placeholder="Estado"
                          pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                          title="Ingresa solo letras, espacios y acentos"
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g,
                              ""
                            ))
                          }
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          name="codigoPostal"
                          value={regUsuario.codigopostal}
                          onChange={(e) =>
                            setRegUsuario({
                              ...regUsuario,
                              codigopostal: e.target.value,
                            })
                          }
                          placeholder="CP"
                          inputMode="numeric"
                          onInput={(e) => {
                            if (e.target.value.length > 5)
                              e.target.value = e.target.value.slice(0, 5);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="ciudad"
                          value={regUsuario.ciudad}
                          onChange={(e) =>
                            setRegUsuario({
                              ...regUsuario,
                              ciudad: e.target.value,
                            })
                          }
                          placeholder="Ciudad"
                          pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                          title="Ingresa solo letras, espacios y acentos"
                          onInput={(e) =>
                            (e.target.value = e.target.value.replace(
                              /[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g,
                              ""
                            ))
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="calle"
                          value={regUsuario.calle}
                          onChange={(e) =>
                            setRegUsuario({
                              ...regUsuario,
                              calle: e.target.value,
                            })
                          }
                          placeholder="Calle"
                        />
                      </div>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={regUsuario.passwordUsuario}
                      onChange={(e) =>
                        setRegUsuario({
                          ...regUsuario,
                          passwordUsuario: e.target.value,
                        })
                      }
                      placeholder="Contraseña"
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button className="submit">Registrarse</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;