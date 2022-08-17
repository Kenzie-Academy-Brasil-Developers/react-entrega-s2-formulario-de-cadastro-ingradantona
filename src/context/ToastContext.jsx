import { createContext, useState } from "react";
import {v4 as uuid } from 'uuid'

export const ToastContext = createContext({})

const ToastProvider = ({ children }) => {
    const [messages, setMessages] = useState([])

    const addToast = ({title, status}) => {
        const toast = {
            title: title,
            status: status,
            id: uuid()
        }

        setMessages([...messages, toast])
    }

    const removeToast = (id) => {
        const newMessages = messages.filter(message => message.id !== id)

        setMessages(newMessages)
    }

    return (
        <ToastContext.Provider value={{addToast, removeToast, messages}}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider