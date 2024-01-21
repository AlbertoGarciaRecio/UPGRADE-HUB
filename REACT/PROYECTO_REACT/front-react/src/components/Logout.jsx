import {useDispatch} from "react-redux";
import { logoutUser } from "./redux/actions/auth.action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Logout () {
    const {handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deslogueo = async(formData) => {
        dispatch(logoutUser(formData, navigate))
    }

    return (
        <section>
            <h2>Cierre Sesión</h2>
            <form onSubmit = {handleSubmit(deslogueo)}>
                <input type = "submit" value = "Cierra Sesión"/>
            </form>
        </section>
    )
}

export default Logout;