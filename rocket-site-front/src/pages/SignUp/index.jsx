import {FiMail, FiLock, FiUser}  from 'react-icons/fi';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import { Formulary, Container, Background } from "./styles";

export function SignUp(){
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    function handleSignUp (){
        If (!name || !email || !password)
           return  alert ("preencha todos os campos!!")
        }

        api.post("/users", {name, email, password})
        .then (() => {
            alert("Usuário cadastrado com sucesso!!");
            navigate("/")
        })
        .catch (error => {
            if(error.response){
                alert (error.response.data.message);
                
            }else{
                alert("Não foi possível cadastrar!!")
            }
        })
    }
    return(
        <Container>
            <Background></Background>
            <Formulary>
                <h1>Rocket Notes!</h1>
                <p>Aplicação para salvar e gerenciar seus links!</p>

                <h2>Crie sua Conta!!</h2>

                <Input
                    placeholder = "Nome"
                    type = "text"
                    icon={FiUser}
                    onChange= {e =>setName(e.target.value)}
                
                />


                <Input
                    placeholder = "E-mail"
                    type = "text"
                    icon={FiMail}
                    onChange= {e =>setEmail(e.target.value)}
                
                />
                <Input
                    placeholder = "Senha"
                    type = "password"
                    icon={FiLock}
                    onChange= {e =>setPassword(e.target.value)}
                
                />
                <Button title='Cadastrar'>
                  
                </Button>

                <Link to='/'>
                    Voltar para o Login!!
                </Link>


            </Formulary>

            
            
        </Container>
    );
