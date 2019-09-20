let down = document.getElementById("down"),
press = document.getElementById("press"),
up = document.getElementById("up");

document.addEventListener("keydown", function (e) {
console.log(e);
down.innerHTML = e.keyCode;
down.innerHTML = e.key;
down.innerHTML = e.code;
});

document.addEventListener("keypress", function (event) {
press.innerHTML = event.keyCode;
});

document.addEventListener("keyup", function (evenement) {
up.innerHTML = evenement.keyCode;
});