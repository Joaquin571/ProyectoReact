import  React from "react";
import Proyectos from "../paginas/Proyectos"

export default class ProyectosPagina extends React.Component{
    render(){
        return(
            <>
                <div className="container pt-5">
                    <h1 className="d-flex justify-content-center">Proyectos</h1>
                    <Proyectos 
                        nombre ="Contador de Clics" 
                        descripcion ="Desarrollé un contador de clics utilizando JavaScript para mi aplicación web. Al cargar la página, utilicé HTML y CSS para crear un botón interactivo. Luego, con JavaScript, añadí un event listener al botón para detectar cada clic realizado por el usuario. Conforme el usuario hace clic en el botón, el event listener se activa, aumentando un contador interno y actualizando visualmente el número de clics en la interfaz de usuario. Este contador de clics me permitió rastrear y mostrar de manera dinámica la cantidad de interacciones del usuario con esa funcionalidad específica dentro de la aplicación."
                        img ="/img/contador.png"
                    />
                    <Proyectos 
                        nombre ="Pagina Web" 
                        descripcion ="Desarrollé una página web para el emprendimiento de mi cliente utilizando HTML, CSS y JavaScript. Me enfoqué en un diseño atractivo, navegación intuitiva y contenido relevante. Implementé elementos interactivos y técnicas de diseño responsivo para mejorar la experiencia del usuario y garantizar una buena visibilidad en buscadores."
                        img ="/img/img2.jpg"
                    />
                    <Proyectos 
                        nombre ="Portfolio Profesional" 
                        descripcion ="Desarrollé un portfolio profesional para mi cliente utilizando una combinación de HTML, CSS y JavaScript. Diseñé y estructuré el portfolio para resaltar sus habilidades, proyectos y experiencia de manera atractiva y fácil de navegar. Implementé interactividad con JavaScript para resaltar detalles específicos y mejorar la experiencia del usuario. El resultado es una plataforma que muestra de manera efectiva la trayectoria y logros profesionales de mi cliente, con un diseño elegante y una navegación intuitiva para potenciales empleadores o clientes."
                        img ="/img/img3.jpg" 
                    />
                </div>
            </>
        )
    }
}