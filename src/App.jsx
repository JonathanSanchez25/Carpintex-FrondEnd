import { BrowserRouter,Routes, Route,Link } from "react-router-dom"
import Producto from './pages/Producto'
import MateriaPrima from './pages/MateriaPrima'
import Navbar from './components/Navbar'
import Inicio from "./pages/Inicio"
import '../public/assets/css/templatemo-574-mexant.css'
import "../public/assets/css/conocenos.css"
import "../public/assets/css/login.css"
import Conocenos from "./pages/Conocenos"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Pedidos from "./pages/Pedidos"
import Carrito from "./pages/Carrito"
import Productos from "./pages/Productos"
import DetalleProducto from "./pages/DetalleProducto"


const App = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
    <BrowserRouter>
    <Navbar />
    {/* <Navigation /> */}
     <Routes>
     <Route path="/" element={<Inicio/>} />
     <Route path="/inicio" element={<Inicio/>} />
     <Route path="/conocenos" element={<Conocenos/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />
     <Route path="/productos" element={<Productos/>} />
     <Route path="/pedidos" element={<Pedidos/>} />
     <Route path="/carrito" element={<Carrito/>} />
      <Route path="/producto" element={<Producto/>} />
      <Route path="/materiaprima" element={<MateriaPrima/>} />
      <Route path="/detalleproducto/:id" element={<DetalleProducto/>} />
      </Routes> 
    </BrowserRouter>
   {/* <TablePaginationComponet /> */}
   </div>
    </div>
    </>
  )
}

const Navigation = () => {
  return (

    <nav className="col-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/producto">Producto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/materiaprima">Materia Prima</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/analytics">Analytics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>

  )
}

export default App