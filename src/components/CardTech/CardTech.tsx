import { useContext } from "react";
import { ITech } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";
import { TechsContext } from "../../context/TechsContext";
import { Button } from "./style";

interface ICardTechProps {
    tech: ITech
}

export default function CardTech ({tech}: ICardTechProps) {
    const {setModalType, setIsOpenModal} = useContext(ModalContext)
    const {setTech} = useContext(TechsContext)

    const editTech = (): void => {
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