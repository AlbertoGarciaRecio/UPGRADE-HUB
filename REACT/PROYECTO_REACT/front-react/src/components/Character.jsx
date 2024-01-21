import "../css/Character&Comics.css";

function Character ({oneCharacter}) {
    return (
        <article>
            <img src = {oneCharacter.thumbnail.path + "." + oneCharacter.thumbnail.extension} alt = "" className = "imgCharacter"/>
            <h4 className = "imgCharacterName">{oneCharacter.name}</h4>
        </article>
    );
}

export default Character;