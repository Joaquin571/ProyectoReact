import React from "react";
import "../paginas/Inicio.css";

export default class Inicio extends React.Component{
    render(){
        return(
            <>
                <div className="cabezal">
                    <h1>Joaquin Gonzalez</h1>
                    <h2>FullStack Developer</h2>
                    <img className="imagen2"src="/img/ysy.jpg" alt="ysya"/>
                </div>
                <div className="texto">
                    <p>¡Bienvenido a mi mundo digital!</p>
                    <small>¡Hola! Soy Joaquin Gonzalez un apasionado Full Stack Developer con un enfoque en la creación de soluciones innovadoras y robustas para desafíos complejos. Mi pasión por la programación me ha llevado a explorar diversas tecnologías y frameworks, permitiéndome desenvolverme en todo el espectro del desarrollo web y más allá.</small>
                    <p>Construyendo experiencias digitales impactantes</p>
                    <small>Con una experiencia sólida en el desarrollo front-end, diseño de interfaces de usuario responsivas y un enfoque centrado en el usuario, me esfuerzo por traducir ideas creativas en experiencias digitales atractivas y funcionales. Mi destreza técnica abarca desde HTML, CSS y JavaScript hasta frameworks modernos como React, Angular y Vue.js, siempre buscando la mejor manera de brindar una experiencia intuitiva y agradable para el usuario final.</small>
                    <p>Potenciando proyectos con robustez y escalabilidad</p>
                    <small>En el ámbito del back-end, mi enfoque se centra en la creación de sistemas sólidos y escalables. Tengo experiencia en el desarrollo de APIs RESTful, bases de datos relacionales y no relacionales, utilizando tecnologías como Node.js, Express, MongoDB, SQL y más. La optimización, seguridad y mantenibilidad son pilares fundamentales en cada proyecto que abordo.</small>
                    <p>Explorando nuevas tecnologías, aprendiendo constantemente</p>
                    <small>El mundo de la tecnología avanza rápidamente, y me mantengo actualizado explorando nuevas herramientas, participando en comunidades de desarrollo y buscando oportunidades para aprender y crecer profesionalmente. La curiosidad y la voluntad de enfrentar nuevos desafíos son impulsos que me motivan a evolucionar constantemente como desarrollador.</small>
                    <p>¡Hagamos realidad tus ideas!</p>
                    <small>Estoy emocionado por cada oportunidad que me permita colaborar en proyectos desafiantes, aportar soluciones creativas y trabajar en equipo para alcanzar objetivos ambiciosos. Si estás buscando un colaborador comprometido, apasionado por la calidad y la innovación, ¡me encantaría ser parte de tu próximo proyecto!</small>
                    <p>¡Gracias por visitar mi portfolio! Siéntete libre de explorar mis proyectos, conocer más sobre mi trayectoria y contactarme para discutir cómo puedo contribuir a tu próximo desafío.
                    ¡Aquí estoy, listo para convertir ideas en realidad!</p>
                </div>
                
                
            </>
        )
    }
}