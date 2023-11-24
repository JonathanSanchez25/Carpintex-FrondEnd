import React from 'react'
import { BrowserRouter,Routes, Route,Link } from "react-router-dom"
import Producto from './pages/Producto'
import MateriaPrima from './pages/MateriaPrima'

const App = () => {
  return (
    <>
    <h1>React App</h1>
    <div className="container-fluid">
      <div className="row">
    <BrowserRouter>
    
    <Navigation />
     <Routes>
      <Route path="/producto" element={<Producto/>} />
      <Route path="/materiaprima" element={<MateriaPrima/>} />
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