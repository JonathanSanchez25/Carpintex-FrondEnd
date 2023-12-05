import { useState } from 'react'; // Make sure to import useState if you are using functional components and need to manage state
import Footer from '../components/Footer';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [regUsuario] = useState({
      rol: 'user',
      // other fields
    });

   
    async function login(){
      console.log(username); 
      console.log(password);
      const url = `https://localhost:7241/api/Usuario/login/${username}?password=${password}`;
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },

        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          if (data.rol_id === 1) {
            console.log('Bienvenido Cliente');
          } else if (data.rol_id === 2) {
            console.log('Bienvenido Admin');
          } else {
            console.log('Rol no reconocido');
          }
        } else {
          console.log('Error en el login');
        }
      } catch (error) {
        console.log('Error al conectarse con la API');
      }

  //  localStorage.setItem('username', username);
  //     localStorage.setItem('rol', regUsuario.rol);
      
  //     const storedRol = localStorage.getItem('rol');
  //     console.log(storedRol);
  //     if(storedRol==='user'){
  //       window.location.href = '/inicio';
  //     }

   

      // }
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
              <form onSubmit={(e) => {
  e.preventDefault(); // Evita la recarga de la página
  login(); // Llama a tu función de inicio de sesión
}} >
                <h3>Iniciar Sesion</h3>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Correo electrónico"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  required
                />
                   <button  className="submit">
                  Ingresar
                </button>
              </form>
            
        
            </div>
            <div className="row">
              <p style={{ color: 'white', textAlign: 'center' }}>
                ¿No tienes cuenta?{' '}
                <a href="/signup" className="active" style={{ color: '#bbc3ff' }}>
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
              <img
                src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
   <Footer/>
   </>
  )
}

export default Login