import "../css/Character&Comics.css";

function Comics ({oneComic}) {
    return (
        <article>
            <img src = {oneComic.thumbnail.path + "." + oneComic.thumbnail.extension} alt = "" className = "imgComic"/>
            <h4 className = "imgComicName">{oneComic.title}</h4>
        </article>
    );
}

export default Comics;