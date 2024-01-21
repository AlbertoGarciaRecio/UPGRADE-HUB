import Comics from "./Comics";

function ListComics ({comics}) {

    const elementLi = comics.map((oneComic) => {
        return (
            <li key = {oneComic.id}>
                <Comics oneComic = {oneComic}/>
            </li>
        );
    });

    return (
        <ul className = "imgComicList">{elementLi}</ul>
    );
}

export default ListComics;