let input = document.querySelector("input");

input.addEventListener("input", checkContent);
function checkContent() {
    console.log(input.value);
}