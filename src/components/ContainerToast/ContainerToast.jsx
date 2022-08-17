import { Container} from "./style";
import Toast from "../Toast/Toast";
import { useContext } from 'react';
import { ToastContext } from "../../context/ToastContext";

export default function ToastContainer(){
    const {messages} = useContext(ToastContext)

    return(
        <Container>
            {
                messages.map((message) => 
                    <Toast key={message.id} message={message}/>
                )
            }
        </Container>
    )
}