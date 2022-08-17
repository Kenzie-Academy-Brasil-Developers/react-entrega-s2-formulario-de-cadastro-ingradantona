import { createContext, useState } from "react";

export const ModalContext = createContext({})

const ModalProvider = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalType, setModalType] = useState(null)
    const [isLeave, setIsLeave] = useState(false)

    return (
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal, modalType, setModalType, isLeave, setIsLeave}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider