import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Profile from "./Profile";
import AuthRoute from "./AuthRoute";
import Logout from "./Logout";
import { useEffect, useState } from "react";
import ListCharacters from "./ListCharacters";
import ListComics from "./ListComics";

function App () {

    const [characters, setCharacters] = useState ([]);
    const [comics, setComics] = useState([]);
    const [searchCharacter, setSearchCharacter] = useState("A");
    
    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=7a163613cfd9629444004fe7fc813385&hash=6aad3fe05d36fa3c128ed8230e3e10e8&limit=100&nameStartsWith=${searchCharacter}`)
        .then((response) => response.json())
        .then((data) => {
            setCharacters(data.data.results);
        })
    }
    , [searchCharacter])

    useEffect(() => {
        fetch(`https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=7a163613cfd9629444004fe7fc813385&hash=6aad3fe05d36fa3c128ed8230e3e10e8&limit=100`)
        .then((response) => response.json())
        .then((data) => {
            setComics(data.data.results);
        })
    }
    , [])

    const handleCharacters = (event) => {
        setSearchCharacter (event.target.value)
    }

    return (
        <>
            <h1 className="titleimage"></h1>
            <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/register" element = {<Register/>}/>
                <Route path="/myprofile" element={<AuthRoute component={<Profile/>}/>}/>
                <Route path = "/logout" element = {<Logout/>}/>
                <Route path = "/characters" element = {
                <>
                    <form>
                        <input type="text" placeholder="Buscar personaje" onChange={handleCharacters}/>
                    </form>
                    <AuthRoute component={<ListCharacters characters={characters}/>}/>
                </>
                }
                />
                <Route path = "/comics" element = {<AuthRoute component={<ListComics comics={comics}/>}/>}/>
            </Routes>
        </>
    )
}

export default App;