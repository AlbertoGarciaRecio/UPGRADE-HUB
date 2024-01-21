import { Link } from "react-router-dom";

function Header () {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                    <li><Link to = "/register">Register</Link></li>
                    <li><Link to = "/myprofile">Perfil</Link></li>
                    <li><Link to = "/logout">Logout</Link></li>
                    <li><Link to = "/characters">Personajes Marvel</Link></li>
                    <li><Link to = "/comics">Comics Marvel</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;