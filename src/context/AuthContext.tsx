import React, { createContext, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../services/api";
import { ToastContext } from "./ToastContext";

interface IAuthProviderProps {
    children: ReactNode
}

export interface ITech {
    status: string,
    title: string,
    id?: string
}

interface IUser {
    id: string,
    name: string,
    email: string,
    course_module: string,
    bio: string,
    contact: string,
    created_at: string,
    updated_at: string,
    avatar_url: null
    techs?: ITech[],
    works?: ITech[],
}

export interface ISingInProps {
    email: string,
    password: string
}

interface IAuthContext {
    user: IUser | null,
    signIn: (data: ISingInProps) => Promise<void>,
    logout: () => Promise<void>,
    loading: boolean,
    techs: ITech[],
    setTechs: React.Dispatch<React.SetStateAction<ITech[]>>,
    loadUser: () => Promise<void>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider = ({children} : IAuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)
    const [techs, setTechs] = useState<ITech[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    const {addToast} = useContext(ToastContext)

    const signIn = async (data: ISingInProps) : Promise<void> => {
        await api.post('/sessions',data)
        .then(response => {
            window.localStorage.setItem("KenzieHub_Token", response.data.token)

            setUser(response.data.user)
            setTechs(response.data.user.techs)

            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            addToast({
                title: 'Login realizado com sucesso',
                status: 'sucess',
            })

            navigate('/home', {replace: true})
        })
        .catch(err =>{
            console.log(err)
            addToast({
                title: 'Erro ao realizar o login',
                status: 'failed'
            })
        })
    }

    async function loadUser() : Promise<void> {
        const token = window.localStorage.getItem('KenzieHub_Token')

        if (token) {
            try{
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                const {data} = await api.get(`/profile`)

                setUser(data)
                setTechs(data.techs)

                navigate('/home', {replace: true})
            } catch (error) {
                console.error(error)
            }
        }
        setLoading(false)
    }

    useEffect(()=>{
        loadUser() 
    },[])

    const logout = async() : Promise<void> => {
        window.localStorage.clear()
        navigate('/login', {replace: true})
    }

    return(
        <AuthContext.Provider value={{user, signIn, logout, loading, techs, setTechs, loadUser}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider