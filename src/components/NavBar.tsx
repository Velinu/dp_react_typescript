import React from "react";
import "../assets/_CSS/NavBar.css"
const NavBar = () => {
    return(
        <>
            <nav>
                <li >
                    <img src="src\assets\_Img\notification.png" alt="notification" id="notification"/>
                </li>
                <li id="profile">
                    <img 
                    src="src\assets\_Img\cidao.jpg" 
                    alt="imagem de Perfil" />
                    <h2>Nome</h2>
                </li>
                <li className="opt-button"><button>Inicio</button></li>
                <li className="opt-button"><button>Consultas</button></li>
                <li className="opt-button"><button>Pacientes</button></li>
                <li className="opt-button"><button>Agenda</button></li>
            </nav>
        </>
    )
}

export default NavBar