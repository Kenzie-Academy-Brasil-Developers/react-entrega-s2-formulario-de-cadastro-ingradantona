import { useEffect, useState } from "react";
import { Loading, Main, Section } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const logout = async() => {
        setUser(null)
        window.localStorage.clear()
        navigate('/login')
    }

    useEffect(() =>{
        window.localStorage.getItem('KenzieHub_User_id') ? (
            axios.get(`https://kenziehub.herokuapp.com/users/${window.localStorage.getItem('KenzieHub_User_id')}`)
            .then(response => setUser(response.data))
            .catch(err => console.log(err))
        ) : (
            navigate('/login')
        )        
    }, [user])
    
    return(
        <Main>
            <div>
                <h1>Kenzie Hub</h1>
                <button onClick={() => logout()}>Voltar</button>
            </div>
            <Section>
                {
                    user ? (
                        <div>
                            <h2>Olá, {user?.name}</h2>
                            <p>{user?.course_module}</p>
                        </div>
                    ) : (
                        <Loading/>
                    )
                }
            </Section>
        </Main>
    )
}