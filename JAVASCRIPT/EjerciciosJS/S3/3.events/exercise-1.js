let boton = document.querySelector("#btnToClick");

//esto no me funciona, porque?

// boton.addEventListener("click", muestramelo(boton));

// function muestramelo(event) {
//     console.log(event);
// }

boton.addEventListener("click", function() {
    console.log(boton);
});
