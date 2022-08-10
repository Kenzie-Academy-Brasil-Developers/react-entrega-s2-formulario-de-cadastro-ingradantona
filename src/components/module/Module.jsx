import { Div, Line } from "./style";
import {AiFillCheckCircle , AiFillExclamationCircle} from 'react-icons/ai'

export default function Module({message, setMessage}){
    return (
        <>
            {
                message === null ? (
                    <></>
                ) : (
                    <Div>
                        {
                            message === true? (
                                <>
                                    <AiFillCheckCircle color='var(--sucess)'/>
                                    <p>Conta criada com sucesso!</p>
                                    <Line colormessage='var(--sucess)'></Line>
                                </>
                                
                            ) : message === false? (
                                <>
                                    <AiFillExclamationCircle color='var(--negative)'/>
                                    <p>Ops! Algo deu errado</p>
                                    <Line colormessage='var(--negative)'></Line>
                                </>
                            ) : (
                                <></>
                            )
                        }
                        <button onClick={() => setMessage(null)}>x</button>
                        
                    </Div>
                )
            }
            
        </>
        
    )
}