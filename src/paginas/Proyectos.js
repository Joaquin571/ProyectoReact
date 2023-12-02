import React from "react";
import './Proyectos.css'
export default class Proyectos extends React.Component{

    constructor(props){
        super(props);
        
    }

    render() {
       
        return (
             <div className={"row my-3"}>
                <div className="col-12 d-flex align-items-center bg-secondary">
                    <img src={this.props.img} alt={this.props.nombre} width={400} height={250} className="imagen"/>
                    <div className="m-4">
                        <h2>{this.props.nombre}</h2>
                        <p>{this.props.descripcion}</p>
                    </div>
                    
                </div>
             </div>
        ); 
    }
}