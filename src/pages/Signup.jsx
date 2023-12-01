import Footer from "../components/Footer";
import { useState } from 'react'; // Make sure to import useState if you are using functional components and need to manage state

function Signup() {
  
  const [regUsuario, setRegUsuario] = useState({
    name: '',
    email: '',
    calle: '',
    estado: '',
    codigopostal: '',
    ciudad: '',
    passwordUsuario: '',
  });

  function register() {
    const postData = async () => {
      try {
        const response = await fetch('https://localhost:7241/api/Usuario', {
          method: 'POST', // Specify the request method
          headers: {
            'Content-Type': 'application/json', // Specify the content type
          },
          body: JSON.stringify({ name: regUsuario.name,
            email: regUsuario.email,
            calle: regUsuario.calle,
            estado: regUsuario.estado,
            codigopostal: regUsuario.codigopostal,
            ciudad: regUsuario.ciudad,
            passwordUsuario: regUsuario.passwordUsuario}),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        await response.json();
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
    console.log(postData());
    postData(); // Call the postData function
    // window.location.href = '/login';
  }
  
  return (
    <>
    <div className="swiper-container" id="top">
  <div className="swiper-wrapper">
    {/* <div className="swiper-slide"> */}
    <section className="login">
      <div className="signup_box">
        <div className="left">
          <div className="contact">
            <form onSubmit={(e) => {
                e.preventDefault(); // Evita la recarga de la página

  register(); // Llama a tu función de inicio de sesión
}}>
              <h3 style={{ textAlign: "center" }}>Crear Cuenta</h3>
              <input
                type="text"
                name="nombre"
                value={regUsuario.name}
                onChange={(e) => setRegUsuario({ ...regUsuario, name: e.target.value })}
                placeholder="Nombre"
                pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                title="Ingresa solo letras, espacios y acentos"
                onInput={(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g, ''))}
                required
              />
              <input
                type="email"
                name="email"
                value={regUsuario.email}
                onChange={(e) => setRegUsuario({ ...regUsuario, email: e.target.value })}
                placeholder="Correo"
              />
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="text"
                    name="estado"
                    value={regUsuario.estado}
                    onChange={(e) => setRegUsuario({ ...regUsuario, estado: e.target.value })}
                    placeholder="Estado"
                    pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                    title="Ingresa solo letras, espacios y acentos"
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g, ''))}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="codigoPostal"
                    value={regUsuario.codigopostal}
                    onChange={(e) => setRegUsuario({ ...regUsuario, codigopostal: e.target.value })}
                    placeholder="CP"
                    inputMode="numeric"
                    onInput={(e) => {
                      if (e.target.value.length > 5) e.target.value = e.target.value.slice(0, 5);
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
                    onChange={(e) => setRegUsuario({ ...regUsuario, ciudad: e.target.value })}
                    placeholder="Ciudad"
                    pattern="[a-zA-Z\sáéíóúÁÉÍÓÚ]*"
                    title="Ingresa solo letras, espacios y acentos"
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚ]/g, ''))}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="calle"
                    value={regUsuario.calle}
                    onChange={(e) => setRegUsuario({ ...regUsuario, calle: e.target.value })}
                    placeholder="Calle"
                  />
                </div>
              </div>
              <input
                type="password"
                name="password"
                value={regUsuario.passwordUsuario}
                onChange={(e) => setRegUsuario({ ...regUsuario, passwordUsuario: e.target.value })}
                placeholder="Contraseña"
              />
                   <button className="submit" >
                Registrarse
              </button>
            </form>
   
          </div>
        </div>
      </div>
    </section>
    {/* </div> */}
  </div>
</div>;
<Footer />
    </>
  )
}

export default Signup