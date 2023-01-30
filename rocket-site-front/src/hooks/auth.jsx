import { createContext, useContext, useState, useEffect } from "react";

import {api} from '../service/api';

export let AuthContext = createContext({});

function AuthProvider({children}){
    let [data, setData] = useState({});

    async function signIn({email, password}){
        
        try{
            let response =await api.post("/sessions", {email, password});

            let {user, token} = response.data;

            localStorage.setItem("@rocket-site-front:user", JSON.stringify(user));
            localStorage.setItem("@rocket-site-front:token");
            

            api.defaults.headers.common ['Authorization'] = `Bearer ${token}`;
            setData({user,token});

        } catch (error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert ("Não foi possível entrar!!")
            }
        }
       


    }

    function signOut(){
        localStorage.removeItem ("@rocket-site-front:token");
        localStorage.removeItem ("@rocket-site-front:user");

        setData({});
    }

    async function updateProfile ({user, avatarFile}){
        try{

            if(avatarFile){
                let fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                let response = awaitapi.patch ("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@rocket-site-front:user", JSON.stringify(user));

            setData({user, token: data.token});
        } catch (error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert ("Não foi possível atualizar o perfil!!!!")
            }
        }
    }

    useEffect(() => {
        let token = localStorage.getItem ("@rocket-site-front:token");
        let user =  localStorage.setItem("@rocket-site-front:user");

        if ( token && user){
            api.defaults.headers.common ['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{signIn, user: data.user, signOut,}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    let context = useContext(AuthContext);

    return context;
}

export {AuthProvider, useAuth};