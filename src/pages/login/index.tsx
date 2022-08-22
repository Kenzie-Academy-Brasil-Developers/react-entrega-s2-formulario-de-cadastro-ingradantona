import LoginForm from "../../components/LoginForm/LoginForm";
import { Main } from "./style";
import { motion } from "framer-motion";

export default function LoginPage(){
    return (
        <Main>
            <h1>Kenzie Hub</h1>
            <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <LoginForm/>
            </motion.div>
        </Main>
    )
}