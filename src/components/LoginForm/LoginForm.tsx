import { Section, Form } from "./style";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../Schemas/Schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext, ISingInProps as ILoginUser } from '../../context/AuthContext'

export default function LoginForm(){
    const {register, handleSubmit, formState: {errors}} = useForm<ILoginUser>({resolver: yupResolver(LoginSchema)})
    const {signIn} = useContext(AuthContext)

    return (
        <Section>
            <h2>Login</h2>

            <Form onSubmit={handleSubmit(signIn)}>
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