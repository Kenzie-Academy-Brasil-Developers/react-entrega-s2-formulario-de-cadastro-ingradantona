import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContext, ITech } from "./AuthContext";
import { api } from "../services/api";
import { ToastContext } from "./ToastContext";
import { ModalContext } from "./ModalContext";

interface ITechsProviderProps {
   children: ReactNode
}

interface ITechsContext {
   registerTech: (data: ITech)=> Promise<void>,
   setTypeForm: React.Dispatch<React.SetStateAction<string | null>>,
   editorTech: (data : ITech) => void,
   tech: ITech | null,
   setTech: React.Dispatch<React.SetStateAction<ITech | null>>,
}

export const TechsContext = createContext<ITechsContext>({} as ITechsContext)

const TechsProvider = ({children} : ITechsProviderProps) => {
const {techs, setTechs, loadUser} = useContext(AuthContext)
const [tech, setTech] = useState<ITech | null>(null)
const [typeForm, setTypeForm] = useState<string | null>(null)
const {addToast} = useContext(ToastContext)
const {setIsLeave} = useContext(ModalContext)

const registerTech = async (data: ITech): Promise<void> => {
   await api.post('/users/techs', data)
   .then(response =>{
      console.log(response)
      setTechs([...techs, response.data])

      addToast({
         title: 'Tecnologia criada com sucesso',
         status: 'sucess',
      })

      setIsLeave(true)
   })
   .catch(err =>{
      console.log(err)
      addToast({
         title: 'Erro ao tentar adicionar tecnologia',
         status: 'failed'
      })
   })
}

const editTech = async (data: ITech) : Promise<void> => {
   const newStatus = {
      'status': data.status,
   }
   
   await api.put(`/users/techs/${tech?.id}`, newStatus)
   .then(response =>{
      console.log(response)
      loadUser()
      
      addToast({
         title: 'Tecnologia atualizada com sucesso',
         status: 'sucess',
      })

   setIsLeave(true)
   })
   .catch(err =>{
      console.log(err)
      addToast({
         title: 'Erro ao tentar editar',
         status: 'failed'
      })
   })
}

const deleteTech = async () : Promise<void> => {
   await api.delete(`/users/techs/${tech?.id}`)
   .then(response =>{
      console.log(response)
      loadUser()
      
      addToast({
         title: 'Tecnologia excluída com sucesso',
         status: 'sucess',
      })

      setIsLeave(true)
   })
   .catch(err =>{
      console.log(err)
      addToast({
         title: 'Erro ao tentar excluir',
         status: 'failed'
      })
   })
}

const editorTech = (data : ITech) : void => {
   typeForm === 'delete' ? deleteTech() : editTech(data)
}

return (
   <TechsContext.Provider value={{registerTech, setTypeForm, editorTech, tech, setTech}}>
      {children}
   </TechsContext.Provider>
)
}

export default TechsProvider