import "../css/Login.css";
import {useDispatch} from "react-redux";
import { registerUser } from "./redux/actions/auth.action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register () {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registrar = async(formData) => {
        dispatch(registerUser(formData, navigate))
    }

    return (
        <section>
            <h2>Registro usuario</h2>
            <form onSubmit = {handleSubmit(registrar)}>
                <label>
                    {/* Email */}
                    <input type = "email" placeholder="Email" {...register("email")}/>
                </label>
                <label>
                    {/* Contraseña */}
                    <input type = "password" placeholder="Contraseña" {...register("password")}/>
                </label>
                <label>
                    {/* Nombre */}
                    <input type = "text" placeholder="Nombre de usuario" {...register("name")}/>
                </label>
                <input type = "submit" value = "Regístrate"/>
            </form>
        </section>
    )
}

export default Register;