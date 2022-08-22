import { useContext} from "react";
import { Loading, Main, Section, Div } from "./style";
import { Navigate } from "react-router-dom";
import  {AuthContext} from '../../context/AuthContext'
import Technologies from "../../components/Technologies/Technologies";

export default function HomePage(){
    const { user, loading, logout} = useContext(AuthContext)

    if (loading) {
        return (
            <Main>
                    <Div>
                        <Loading>
                            <div></div>
                        </Loading>
                    </Div>
            </Main>
        )
    }

    return(
        <Main>
            {
                 user ? (
                    <>
                        <div>
                            <h1>Kenzie Hub</h1>
                            <button onClick={() => logout()}>Voltar</button>
                        </div>
                        <Section>
                            <div>
                                <h2>Olá, {user.name}</h2>
                                <p>{user.course_module}</p>
                            </div>
                        </Section>
                        <Technologies/>
                    </>
                ) : (
                    <Navigate to={'/login'} replace/>
                )
            }
            
        </Main>
    )
}