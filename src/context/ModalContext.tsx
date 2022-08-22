import { createContext, ReactNode, useState } from "react";

interface IModalProviderProps {
    children: ReactNode
}

interface IModalContext {
    isOpenModal: boolean,
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    modalType: string | null,
    setModalType: React.Dispatch<React.SetStateAction<string | null>>,
    isLeave: boolean,
    setIsLeave: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<IModalContext>({} as IModalContext)

const ModalProvider = ({children}: IModalProviderProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string | null>(null)
    const [isLeave, setIsLeave] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal, modalType, setModalType, isLeave, setIsLeave}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider