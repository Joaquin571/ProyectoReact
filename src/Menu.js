import React from "react";
import { Link } from "react-router-dom";
export default class Menu extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center bg-light fixed-top py-2 px-4">
                    <h1>JG</h1>
                    <Link to='/Inicio' className="mx-3">Inicio</Link>                  
                    <Link to='/Proyecto'className="mx-3">Proyectos</Link>
                    <Link to='/Clientes'className="mx-3">Clientes</Link>
                    <Link to='/Contacto' className="mx-3">Contacto</Link>
                </div>
            </div>
        )
    }
}