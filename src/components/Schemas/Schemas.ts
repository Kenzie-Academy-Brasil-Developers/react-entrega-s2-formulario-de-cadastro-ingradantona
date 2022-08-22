import * as yup from "yup"

export const RegisterSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula").matches(/([a-z])/, "deve conter ao menos 1 letra minúscula").matches(/(\d)/, "deve conter ao menos 1 número").matches(/(\W)|_/, "deve conter ao menos 1 caracter especial").matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    confirmPassword: yup.string().required("Confirmação obrigatória").oneOf([yup.ref("password")], "As senhas são diferentes"),
    bio: yup.string(),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório") 
})

export const LoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido")
})