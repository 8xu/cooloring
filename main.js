const button = document.querySelector('#button');
const colorP = document.querySelector('#color');

function randomColor() {
    var color = `#` + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    document.body.style.backgroundColor = color;
    colorP.innerHTML = color;
}

button.addEventListener('click', () => {
    randomColor();
});