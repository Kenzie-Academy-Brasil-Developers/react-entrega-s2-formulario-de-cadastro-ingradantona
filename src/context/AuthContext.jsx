import { createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../services/api";
import { ToastContext } from "./ToastContext";

export const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const {addToast} = useContext(ToastContext)

    const signIn = async (data) => {
        await api.post('/sessions',data)
        .then(response => {
            window.localStorage.setItem("KenzieHub_Token", response.data.token)

            setUser(response.data.user)
            setTechs(response.data.user.techs)

            api.defaults.headers.authorization = `Bearer ${response.data.token}`

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

    async function loadUser() {
        const token = window.localStorage.getItem('KenzieHub_Token')

        if (token) {
            try{
                api.defaults.headers.authorization = `Bearer ${token}`

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

    const logout = async() => {
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