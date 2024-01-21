import "../css/Login.css";
import {useDispatch} from "react-redux";
import { loginUser } from "./redux/actions/auth.action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login () {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logueo = async(formData) => {
        dispatch(loginUser(formData, navigate))
    }

    return (
        <section>
            <h2>Inicio Sesión</h2>
            <form onSubmit = {handleSubmit(logueo)}>
                <label>
                    {/* Email */}
                    <input type = "email" placeholder="Email" {...register("email")}/>
                </label>
                <label>
                    {/* Contraseña */}
                    <input type = "password" placeholder="Contraseña" {...register("password")}/>
                </label>
                <input type = "submit" value = "Inicia Sesión"/>
            </form>
        </section>
    )
}

export default Login;