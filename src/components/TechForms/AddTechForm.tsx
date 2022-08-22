import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ITech } from "../../context/AuthContext";
import { TechsContext } from "../../context/TechsContext";
import { Form } from "./styles";

export default function AddTechForm (){
    const {register, handleSubmit} = useForm<ITech>()
    const {registerTech} = useContext(TechsContext)

    return (
        <Form onSubmit={handleSubmit(registerTech)}>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" placeholder="Ex: JavaScript" {...register("title")}/>
            <label htmlFor="status">Selecionar Status</label>
            <select id="status" {...register("status")}>
                <option value="">--</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Cadastrar Tecnologia</button>
        </Form>
    )
}