import { useState } from "react";
import {useAuth} from '../../hooks/auth'
import { Container, Formulary, Avatar } from "./styles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {api} from '../../service/api'
import {FiArrowDownLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

export function Profile (){
    let {user, updateProfile} = useAuth();

    let [name, setname] = useState(user.name);
    let [email, setEmail] = useState(user.email);
    let [passwordOld, setPasswordOld] = useState();
    let [passwordNew, setPasswordNew] = useState();

    let avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    let [avatar, setAvatar] = useState(avatarUrl);
    let [avatarfile, setAvatarFile] = useState(null);

    async function handleUpdate(){
        let user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        await updateProfile ({ user, avatarfile });

    }

    function handleChangeAvatar(event){
        let file = event.target.files [0];
        setAvatarFile(file);

        let imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
            
    }
    

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
                        src={avatar} 
                        alt="Foto do usuário" 
                        />

                        <label htmlFor="Avatar">
                            <FiCamera/>
                        

                        
                        <input 
                            id="Avatar"
                            type='file'
                            onChange={handleChangeAvatar}
                        />

                            </label>
                    </Avatar>
                <Input
                    placeholder = "Nome"
                    type= 'text'
                    icon = {FiUser}
                    value = {name}
                    onChange = { e=> setName (e.target.value)}
                
                />

                <Input
                    placeholder = "Email"
                    type= 'text'
                    icon = {FiMail}
                    value ={email}
                    onChange = { e=> setEmail (e.target.value)}
                
                />

                <Input
                    placeholder = "Senha Atual"
                    type= 'password'
                    icon = {FiLock}
                    onChange = { e=> setPasswordOld (e.target.value)}
                
                />

                <Input
                    placeholder = "Nova Senha"
                    type= 'password'
                    icon = {FiLock}
                    onChange = { e=> setPasswordNew (e.target.value)}
                
                />


    
                <Button title = 'Salvar' onClick={handleUpdate}/>
            </Formulary>

        </Container>
    )
}