let input = document.querySelector("input");

input.addEventListener("focus", checkValue);
function checkValue() {
    console.log(input.value);
}