import {FiMail, FiLock}  from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Formulary, Container, Background } from "./styles";

export function SignIn(){
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
                
                />
                <Input
                    placeholder = "Senha"
                    type = "password"
                    icon={FiLock}
                
                />
                <Button title='Entrar'>
                  
                </Button>

                <Link to= '/register'>
                    Criar Conta!
                </Link>


            </Formulary>

            <Background></Background>
            
        </Container>
    );
}