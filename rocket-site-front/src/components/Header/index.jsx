import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from '../../hooks/auth'
import { Container, Profile, Logout} from "./styles";
import {api} from '../../service/api'

export function Header(){
    let {signOut, user} = useAuth();

    let avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    
    return(
        <Container>
            <Profile to ='/profile'>
                <img src={avatarUrl} alt={user.name} />


                <div>
                    <span> Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        

        </Container>
    );
    
    
}