import { Container, Line } from "./styles";
import { useEffect, useState } from 'react';
import { useContext } from "react";
import {AiFillCheckCircle , AiFillExclamationCircle, AiFillCloseCircle} from 'react-icons/ai'
import { ToastContext } from "../../context/ToastContext";

export default function Toast({message}){
    const [isLeave, setIsLeave] = useState(false);
    const {removeToast} = useContext(ToastContext)

    useEffect(() => {
        let timer;
    
        if (isLeave) {
          timer = setTimeout(() => {
            removeToast(message.id);
          }, 700);
        } else {
          timer = setTimeout(() => {
            setIsLeave(true);
          }, 3000);
        }
    
        return () => {
          clearTimeout(timer);
        };
      }, [isLeave]);

    return(
        <Container isLeave ={isLeave}>
            { 
                message.status === 'sucess' ? (
                    <>
                        <AiFillCheckCircle color='var(--sucess)'/>
                        <p>{message.title}</p>
                        <Line colormessage='var(--sucess)'/>
                    </>
                ) : message.status === 'failed' ? (
                    <>
                        <AiFillCloseCircle color='var(--negative)'/>
                        <p>{message.title}</p>
                        <Line colormessage='var(--negative)'></Line>
                    </>
                ) : (
                    <>
                        <AiFillExclamationCircle color='var(--informative)'/>
                        <p>{message.title}</p>
                        <Line colormessage='var(--informative)'></Line>
                    </>
                )
            }
             <button type='button' onClick={() => setIsLeave(true)}>x</button>
        </Container>
    )
}