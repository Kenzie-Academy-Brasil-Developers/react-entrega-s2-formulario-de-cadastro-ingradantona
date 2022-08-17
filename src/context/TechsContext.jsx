import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { api } from "../services/api";
import { ToastContext } from "./ToastContext";
import { ModalContext } from "./ModalContext";

 export const TechsContext = createContext({})

 const TechsProvider = ({children}) => {
   const {techs, setTechs, loadUser} = useContext(AuthContext)
   const [tech, setTech] = useState(null)
   const [typeForm, setTypeForm] = useState(null)
   const {addToast} = useContext(ToastContext)
   const {setIsLeave} = useContext(ModalContext)

   const registerTech = async (data) => {
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

  const editTech = async (data) => {
      const newStatus = {
         'status': data.status,
      }
      
      await api.put(`/users/techs/${tech.id}`, newStatus)
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

   const deleteTech = async (data) => {
      await api.delete(`/users/techs/${tech.id}`)
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

   const editorTech = (data) => {
      typeForm === 'delete' ? deleteTech(data) : editTech(data)
   }

   return (
      <TechsContext.Provider value={{registerTech, setTypeForm, editorTech, tech, setTech}}>
         {children}
      </TechsContext.Provider>
   )
 }

 export default TechsProvider