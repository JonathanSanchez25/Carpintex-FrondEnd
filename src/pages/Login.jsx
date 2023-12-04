import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function login() {
    try {
      const response = await fetch(`https://localhost:7241/api/Usuario/login/${encodeURIComponent(username)}?password=${encodeURIComponent(password)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      console.log(response);
      if (!response.ok) {
        console.error("Login failed:", response.status);
        setError("Credenciales inválidas. Por favor, inténtalo de nuevo.");
        return;
      }

      // Borra el error si ya se ha resuelto la petición
      setError(null);

      const userData = await response.json();

      // Almacena el token de sesión y el rol en el localStorage
      localStorage.setItem("token", userData.token);
      localStorage.setItem("rol", userData.rol);

      // Redirige a la página de inicio
      navigate("/inicio");

      // Actualiza el estado de autenticación en la aplicación
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Ocurrió un error durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.");
    }
  }

  return (
    //login
    <>
      <div className="swiper-container" id="top">
        <div className="swiper-wrapper">
          <section className="login">
            <div className="login_box">
              <div className="left">
                <div className="contact">
                  <form
                    className="form"
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault(); // Evita la recarga de la página
                      login(); // Llama a tu función de inicio de sesión
                    }}
                  >
                    <h3>Iniciar Sesion</h3>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Correo electrónico"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña"
                      required
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button className="submit">Ingresar</button>
                  </form>
                </div>
                <div className="row">
                  <p style={{ color: "white", textAlign: "center" }}>
                    ¿No tienes cuenta?{" "}
                    <a
                      href="/signup"
                      className="active"
                      style={{ color: "#bbc3ff" }}
                    >
                      Crear cuenta
                    </a>
                  </p>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
                  <h2>CARPINTEX</h2>
                  <h5>Transformando tus espacios, un mueble a la vez.</h5>
                </div>
                <div className="right-inductor">
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

export default Login;
