import Character from "./Character";

function ListCharacters ({characters}) {

    const elementLi = characters.map((oneCharacter) => {
        return (
            <li key = {oneCharacter.id}>
                <Character oneCharacter = {oneCharacter}/>
            </li>
        );
    });

    return (
        <ul className = "imgCharacterList">{elementLi}</ul>
    );
}

export default ListCharacters;