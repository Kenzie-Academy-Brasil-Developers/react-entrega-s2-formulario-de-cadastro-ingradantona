import { Section, Div, Ul } from "./style";
import {BsFileEarmarkPlusFill} from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import CardTech from "../CardTech/CardTech";
import { ModalContext } from "../../context/ModalContext";
import { AuthContext } from "../../context/AuthContext";

export default function Technologies () {
    const {techs} = useContext(AuthContext)
    const {setIsOpenModal, setModalType} = useContext(ModalContext)

    const addTech = () =>{
        setModalType('register')
        setIsOpenModal(true)
    }

    return(
        <Section>
            <div>
                <h2>Tecnologias</h2>
                <button onClick={addTech}><AiOutlinePlus/></button>
            </div>
            {
                  techs.length ? (
                    <Ul>
                       {techs.map(element => <CardTech tech={element} key={element.id}/>)} 
                    </Ul>
                  ) : (
                    <Div>
                        <button onClick={addTech}><BsFileEarmarkPlusFill></BsFileEarmarkPlusFill></button>
                        <p>Você ainda não possui nenhuma tecnologia cadastrada...</p>
                    </Div>
                  )
            }
            
        </Section>
    )
}