import {FiMail, FiLock, FiUser}  from 'react-icons/fi';
import {Link} from 'react-router-dom'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Formulary, Container, Background } from "./styles";

export function SignUp(){
    return(
        <Container>
            <Background></Background>
            <Formulary>
                <h1>Rocket Notes!</h1>
                <p>Aplicação para salvar e gerenciar seus links!</p>

                <h2>Crie sua Conta!!</h2>

                <Input
                    placeholder = "User"
                    type = "text"
                    icon={FiUser}
                
                />


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
                <Button title='Cadastrar'>
                  
                </Button>

                <Link to='/'>
                    Voltar para o Login!!
                </Link>


            </Formulary>

            
            
        </Container>
    );
}