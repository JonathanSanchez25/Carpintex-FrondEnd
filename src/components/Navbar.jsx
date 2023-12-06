import { Link } from "react-router-dom"
import { FaSignOutAlt,FaUser,FaShoppingCart  } from "react-icons/fa";

function Navbar() {

    function exit(){
      localStorage.removeItem('rol');
      window.location.href = '/login';
    }
  return (
    <>
    <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="index.html" className="logo">
                        <img src="../../public/assets/images/logo.png" alt=""></img>
                    </a>
                    <ul className="nav">
                    <li className="scroll-to-section"><Link className="nav-link" to="/inicio">Inicio</Link></li>
<li className="scroll-to-section"><Link className="nav-link" to="/productos">Productos</Link></li>
<li className="scroll-to-section"><Link className="nav-link" to="/conocenos">Conocenos</Link></li>
<li className="scroll-to-section" style={{ cursor: 'pointer' }}>
          <Link className="nav-link" to="/carrito">
          <span id="txtPopupCantidad" className='text-white badge rounded-pill badge-notification bg-danger' > Compras</span>
            <FaShoppingCart /></Link>
      </li>

{localStorage.getItem('rol') ? (
  <>
    <li className="scroll-to-section">
      <Link className="nav-link" to="/pedidos">Pedidos</Link>
    </li>
    <li className="scroll-to-section" style={{ cursor: 'pointer' }}>
      <Link className="nav-link" ><FaSignOutAlt onClick={exit} /></Link>
    </li>

  </>
):(
  <>
    <li className="scroll-to-section"><Link className="nav-link" to="/login"><FaUser size="1em" /></Link></li>

  </>
)}

                        {/*  */}
                    </ul>       
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</header> 
</>

 )
}

export default Navbar