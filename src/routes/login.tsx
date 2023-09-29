import React, { useState } from "react";
import "../assets/_CSS/login.css"
import Text_input from "../components/text_input_login";
const login = () =>{
    const [cpf, setCpf] = useState('')
            //cpf representa o meu estado, e setCpf representa a função que altera meu estado
        
    return(
        <div className="login-screen">
            <div className="main-content">
                    <h1 id="title">
                        Bem vindo!
                    </h1>
                <form>
                    <Text_input value={cpf} 
                    type="text" 
                    onChange={(event) => setCpf(event.target.value)} 
                    mask="999.999.999-99" 
                    placeholder=""/>

                    <Text_input type="password" mask="" placeholder="Digite sua senha"/>
                </form>
            </div>
            <div id="logo-display">
            </div>
        </div>
    )
}

export default login; 