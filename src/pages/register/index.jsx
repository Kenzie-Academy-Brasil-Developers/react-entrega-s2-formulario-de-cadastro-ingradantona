import RegisterForm from "../../components/RegisterForm/RegisterForm"
import { Main } from "./style"

export default function RegisterPage () {
    return(
        <Main>
            <div>
                <h1>Kenzie Hub</h1>
                <a href="/login">Voltar</a>
            </div>
            <RegisterForm />
        </Main>
    )
}