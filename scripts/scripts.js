let cuby = document.querySelector(".playerKeyBoard");
let playerArea = document.querySelector(".playerArea");
let cubyPosX = 70;
let cubyPosY = 50;
let time = setTimeout(gameOver, 3000);
document.addEventListener("keydown", moveCube); // Passes the event without even calling it

function moveCube(e) {
    console.log(cubyPosX, cubyPosY);
    switch (e.keyCode) {
        case 40:
            cubyPosX += 1;
            break;
        case 37:
            cubyPosY += -1;
            break;
        case 38:
            cubyPosX += -1;
            break;
        case 39:
            cubyPosY += 1;
            break;
    }

    if (cubyPosX > 90) {
        cubyPosX = 10;
    } else if (cubyPosX < 10) {
        cubyPosX = 90;
    }
    if (cubyPosY > 90) {
        cubyPosY = 10;
    } else if (cubyPosY < 10) {
        cubyPosY = 90;
    }

    let pozX = cubyPosX + "%";
    let pozY = cubyPosY + "%";
    cuby.style.top = pozX;
    cuby.style.left = pozY;
    console.log(pozX, pozY);
}

cuby.addEventListener("click", touched);

function touched() {
    cuby.style.backgroundColor = "red";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert("Muuuse player won!!!");
    clearTimeout(time);
}

function gameOver() {
    cuby.style.backgroundColor = "green";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert("Keyboard player won!!!");
}

function promptName(){
    let playerOne = prompt("Give the name of Keyboard Player");
    let playerTwo = prompt("Give the name of Mouse Player");
}

