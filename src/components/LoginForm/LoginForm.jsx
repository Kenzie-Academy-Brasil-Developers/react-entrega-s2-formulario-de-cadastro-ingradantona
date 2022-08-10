import { Section, Form } from "./style";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../Schemas/Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm(){
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(LoginSchema)})
    const navigate = useNavigate()

    const submit = async (data) => {
        await axios.post('https://kenziehub.herokuapp.com/sessions',data)
        .then(response => {
            window.localStorage.setItem("KenzieHub_Token", response.data.token)
            window.localStorage.setItem("KenzieHub_User_id", response.data.user.id)
        })
        .catch(err => console.log(err))

        navigate('/home')
    }

    return (
        <Section>
            <h2>Login</h2>

            <Form onSubmit={handleSubmit(submit)}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")}/>
                <span>{errors.email?.message}</span>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register("password")}/>
                <button type="submit">Entrar</button>
            </Form>

            <span>Ainda não possui uma conta?</span>
            <a href="/register">Cadastre-se</a>
        </Section>
    )
}