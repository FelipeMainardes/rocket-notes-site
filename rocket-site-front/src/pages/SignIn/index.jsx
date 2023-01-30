import { useState } from 'react';
import {FiMail, FiLock}  from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {useAuth} from '../../hooks/auth'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Formulary, Container, Background } from "./styles";

export function SignIn(){
    let {email, setEmail} =useState ("");
    let {password, setPassword} =useState ("");

    let {signIn} = useAuth();

    function handleSignIn(){
        signIn({email, password});
    }
    
    return(
        <Container>
            <Formulary>
                <h1>Rocket Notes!</h1>
                <p>Aplicação para salvar e gerenciar seus links!</p>

                <h2>Faça seu Login!!</h2>

                <Input
                    placeholder = "E-mail"
                    type = "text"
                    icon={FiMail}
                    onChange = {e => setEmail (e.target.value)}
                />
                <Input
                    placeholder = "Senha"
                    type = "password"
                    icon={FiLock}
                    onChange = {e => setPassword (e.target.value)}
                
                />
                <Button title='Entrar' onClick= {handleSignIn}>
                  
                </Button>

                <Link to= '/register'>
                    Criar Conta!
                </Link>


            </Formulary>

            <Background></Background>
            
        </Container>
    );
}