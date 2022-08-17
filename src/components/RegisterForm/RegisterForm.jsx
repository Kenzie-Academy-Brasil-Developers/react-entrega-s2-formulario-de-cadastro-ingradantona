import { Form, Section } from "./style";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import { RegisterSchema } from "../Schemas/Schemas";
import axios from "axios";
import { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function RegisterForm () {
    const {addToast} = useContext(ToastContext)
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(RegisterSchema)})

    const submit = (data) => {
        axios.post( "https://kenziehub.herokuapp.com/users", data)
        .then(response => {
            console.log(response.data)
            addToast({
                title: 'Cadastro realizado com sucesso',
                status: 'sucess',
            })
            navigate('/login', {replace: true})
        })
        .catch(err => {
            console.log(err)
            addToast({
                title: 'Falha ao realizar o cadastro',
                status: 'failed',
            })
        })
    }

    return (
        <Section>
            <h2>Crie sua conta</h2>
            <span>Rápido e grátis, vamos nessa</span>
            
            <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <Form onSubmit={handleSubmit(submit)}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" {...register("name")} placeholder="Digite aqui seu nome"/>
                    <span>{errors.name?.message}</span>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" {...register("email")} placeholder="Digite aqui seu email"/>
                    <span>{errors.email?.message}</span>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" {...register("password")} placeholder="Digite aqui sua senha"/>
                    <span>{errors.password?.message}</span>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword")} placeholder="Confirme aqui sua senha"/>
                    <span>{errors.confirmPassword?.message}</span>
                    <label htmlFor="bio">Bio</label>
                    <input type="text" id="bio" {...register("bio")} placeholder="Fale sobre você"/>
                    <span>{errors.bio?.message}</span>
                    <label htmlFor="contact">Contato</label>
                    <input type="text" id="contact" {...register("contact")} placeholder="Insira seu linkedin"/>
                    <span>{errors.contact?.message}</span>
                    <label htmlFor="course_module">Módulo</label>
                    <select id="course_module" {...register("course_module")} placeholder="Primeiro módulo">
                        <option value="">--</option>
                        <option value="M1" >Primeiro Módulo</option>
                        <option value="M2" >Segundo Módulo</option>
                        <option value="M3" >Terceiro Módulo</option>
                        <option value="M4" >Quarto Módulo</option>
                        <option value="M5" >Quinto Módulo</option>
                        <option value="M6" >Sexto Módulo</option>
                    </select>
                    <span>{errors.course_module?.message}</span>
                    <button type="submit">Cadastrar</button>
                </Form>
            </motion.div>
        </Section>
    )
}