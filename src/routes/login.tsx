import { useState } from "react";
import "../assets/_CSS/login.css"
import Text_input from "../components/text_input_login";
const login = () =>{
    const [cpf, setCpf] = useState('')
            //cpf representa o meu estado, e setCpf representa a função que altera meu estado
    const [senha, setSenha] = useState('')  


    return(
        <div className="login-screen">
            <div className="main-content">
                    <h1 id="title">
                        Bem vindo!
                    </h1>
                <form>
                    <div className="input-container">
                        <label htmlFor="cpf-input">CPF</label>
                        <Text_input
                        id="cpf-input"
                        value={cpf} 
                        type="text" 
                        onChange={(event) => setCpf(event.target.value)} 
                        mask="999.999.999-99" 
                        placeholder=""/>
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="cpf-input">Senha</label>
                        <Text_input value={senha}
                        type="password" 
                        onChange={(event) => setSenha(event.target.value)}
                        mask="" />
                    </div>

                    <div className="checkbox-container">
                        <div>
                            <input id="check-box"
                            type="checkbox" 
                            name="check-box"/>
                            <label htmlFor="check-box">Lembrar dados</label>
                        </div>

                        <a href="https://youtu.be/Wjavakm7gMQ?si=iYvU76EQtIHyTyBz">Esqueci minha senha</a>
                    </div>

                    <input type="submit" id="enviar-forms" value="Entrar"/>
                </form>
            </div>
            <div id="logo-display">
            </div>
        </div>
    )
}

export default login; 