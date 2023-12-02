import Menu from './Menu';
import Pie from './Pie';

import './App.css';

import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import ClientesPagina from './paginas/ClientesPagina';

import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import ProyectosPagina from './paginas/ProyectosPagina';


function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container pt-5">
          
            <Routes>
              <Route path="/Inicio" element={<InicioPagina/>}/>
              <Route path="/Proyecto" element={<ProyectosPagina/>}/>
              <Route path="/Clientes" element={<ClientesPagina/>}/>
              <Route path="/Contacto" element={<ContactoPagina/>}/>
            </Routes>
            <Pie/>
        </div>
      </Router>
    </>
  );
}

export default App;
