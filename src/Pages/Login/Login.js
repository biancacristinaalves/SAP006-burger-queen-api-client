import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button/Button";
import LogoImg from "../../components/image/Image.js";

function Login() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className='container login'>

            <LogoImg />
            <h1>Arroz logar</h1>
                <form>
                    <Input 
                        type='email' 
                        id='email' 
                        placeholder='digite o seu e-mail'
                        value={email}
                        errorMessage='Por favor, insira um e-mail válido.'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        type='password' 
                        id='password' 
                        placeholder='digite a sua senha'
                        value={password}
                        errorMessage='Por favor, insira uma senha válida.'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </form>
            <Button label='Entrar'>
                <Link to='/mesas'></Link>
            </ Button>

        </div>

    );
};

export default Login;