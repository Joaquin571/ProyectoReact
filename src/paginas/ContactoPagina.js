import React from "react";

export default class Contacto extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);

    }

    submitted(event){
        alert("Se envio el formulario de " + this.state.nombre);
        event.preventDefault();
    }

    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }

    render(){
        return(
            <>
                <div className="container pt-5 bg-secondary">
                    <h1 className="m-3 d-flex justify-content-center">Contacto</h1>
                    <form onSubmit={this.submitted}>
                        <div className="form-group pb-3 m-2">
                            <label>Nombre</label>
                            <input type="text" className="form-control" onChange={this.changed}/>         
                        </div>
                        <div className="form-group pb-3 m-2">
                            <label>Mensaje</label>
                            <textarea className="form-control"></textarea>
                        </div>       
                        <button type="submit" className="btn btn-primary m-2">Enviar</button>
                    </form>
                </div>
            </>
        )
    }
}