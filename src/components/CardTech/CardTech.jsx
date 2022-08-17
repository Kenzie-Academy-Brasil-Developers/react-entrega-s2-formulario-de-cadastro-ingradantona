import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { TechsContext } from "../../context/TechsContext";
import { Button } from "./style";

export default function CardTech ({tech}) {
    const {setModalType, setIsOpenModal} = useContext(ModalContext)
    const {setTech} = useContext(TechsContext)

    const editTech = () => {
        setModalType('edit')
        setTech(tech)
        setIsOpenModal(true)
    }

    return(
        <li>
            <Button onClick={editTech}>
                <h4>{tech.title}</h4>
                <span>{tech.status}</span>
            </Button>
        </li>
    )
}