import { Div, Container} from "./style";
import { useContext, useEffect} from "react";
import { ModalContext } from "../../context/ModalContext";
import AddTechForm from "../TechForms/AddTechForm";
import EditTechForm from "../TechForms/editTech";

export default function Module(){
    const {isOpenModal, setIsOpenModal, modalType, isLeave, setIsLeave} = useContext(ModalContext)
    

    useEffect(()=>{
        
        let timer : void
        if (isLeave) {
            timer = setTimeout(() => {
                setIsOpenModal(false);
                setIsLeave(false)
            }, 400)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [isLeave])

    return (
        <>
        { isOpenModal && (
            <Div>
                {
                    modalType === 'register' ? (
                        <Container isLeave={isLeave}>
                            <div>
                                <h2>Cadastrar tecnologia</h2>
                                <button onClick={()=> setIsLeave(true)}>x</button>
                            </div>
                            <AddTechForm/>
                        </Container>
                    ) : (
                        <Container isLeave={isLeave}>
                            <div>
                                <h2>Editar tecnologia</h2>
                                <button onClick={()=> setIsLeave(true)}>x</button>
                            </div>
                            <EditTechForm/>
                        </Container>
                    )
                }
            </Div>
        )          
        }
        </>
    )
}