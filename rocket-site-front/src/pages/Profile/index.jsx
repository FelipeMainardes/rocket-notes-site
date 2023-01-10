import { Container, Formulary, Avatar } from "./styles";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {FiArrowDownLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

export function Profile (){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowDownLeft/>
                </a>
            </header>

            <Formulary>
                    <Avatar>
                        <img 
                        src="https://github.com/FelipeMainardes.png" 
                        alt="Foto do usuário" 
                        />

                        <label htmlFor="Avatar">
                            <FiCamera/>
                        

                        
                        <input 
                            id="Avatar"
                            type='file'
                        />

                            </label>
                    </Avatar>
                <Input
                    placeholder = "Nome"
                    type= 'text'
                    icon = {FiUser}
                
                />

                <Input
                    placeholder = "Email"
                    type= 'text'
                    icon = {FiMail}
                
                />

                <Input
                    placeholder = "Senha Atual"
                    type= 'password'
                    icon = {FiLock}
                
                />

                <Input
                    placeholder = "Nova Senha"
                    type= 'password'
                    icon = {FiLock}
                
                />


                <Button title = 'Salvar'/>
            </Formulary>

        </Container>
    )
}