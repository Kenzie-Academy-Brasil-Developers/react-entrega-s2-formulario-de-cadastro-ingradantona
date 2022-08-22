import { useContext} from "react";
import { useForm } from "react-hook-form";
import { ITech } from "../../context/AuthContext";
import { TechsContext } from "../../context/TechsContext";
import { Form, Button} from "./styles";

export default function EditTechForm () {
    const {tech} = useContext(TechsContext)
    const {editorTech, setTypeForm} = useContext(TechsContext)
    const {register, handleSubmit} = useForm<ITech>()


    return (
        <Form  onSubmit={ handleSubmit(editorTech)}>
            <label htmlFor="title">Nome</label>
            <input type="text" id="title" placeholder="Ex: JavaScript" value={tech?.title} {...register("title")} readOnly/>
            <label htmlFor="status">Selecionar Status</label>
            <select id="status" {...register("status")} >
                <option selected={tech?.status === 'Iniciante' ? true : false}   value="Iniciante">Iniciante</option>
                <option selected={tech?.status === 'Intermediário' ? true : false} value="Intermediário">Intermediário</option>
                <option selected={tech?.status === 'Avançado' ? true : false} value="Avançado">Avançado</option>
            </select>
            <div>
                <Button width={65} color={'var(--color-primary-negative)'} type="submit" onClick={() => setTypeForm('edit')}>Editar Tecnologia</Button>
                <Button width={35} color={'var(--grey-1)'} type="submit" onClick={() => setTypeForm('delete')}>Excluir</Button>
            </div>
        </Form>
    )
}