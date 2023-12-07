import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Producto from "./pages/Producto";
import MateriaPrima from "./pages/MateriaPrima";
import CustomNavbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import "../public/assets/css/templatemo-574-mexant.css";
import "../public/assets/css/conocenos.css";
import "../public/assets/css/login.css";
import Conocenos from "./pages/Conocenos";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pedidos from "./pages/Pedidos";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";
import Pago from "./pages/Pago";
import DetalleProducto from "./pages/DetalleProducto";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/materiaprima" element={<MateriaPrima />} />
        <Route path="/detalleproducto/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
