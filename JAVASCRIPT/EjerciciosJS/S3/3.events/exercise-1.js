let boton = document.querySelector("#btnToClick");

boton.addEventListener("click", muestramelo);
function muestramelo(event) {
    console.log(event);
}
