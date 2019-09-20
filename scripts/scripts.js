let cuby = document.querySelector(".playerKeyBoard");
let playerArea = document.querySelector(".playerArea");
let playerOneDisplay = document.querySelector("#keyName");
let playerTwoDisplay = document.querySelector("#muuzeName");
let cubyPosX = 70;
let cubyPosY = 50;
let playerOne;
let playerTwo;
let playerOneScore = 0;
let playerTwoScore = 0;

checkPlayerScore();
promptName();

let time = setTimeout(gameOver, 3000);
document.addEventListener("keydown", moveCube); // Passes the event without even calling it

function moveCube(e) {
    console.log(cubyPosX, cubyPosY);
    console.log(e);
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
    alert(playerTwo + " Muuuse player won!!!");
    clearTimeout(time);
    playerTwoScore++;
}

function gameOver() {
    cuby.style.backgroundColor = "green";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert(playerOne + " Keyboard player won!!!");
    playerOneScore++;
}

function promptName() {
    playerOne = prompt("Give the name of Keyboard Player");
    playerTwo = prompt("Give the name of Mouse Player");
    playerOneDisplay.innerText = playerOne;
    playerTwoDisplay.innerText = playerTwo;
}

function checkPlayerScore() {
    if (playerOneScore >= 5) {
        alert(playerOne + " won the game");
    } else if (playerTwoScore >= 5) {
        alert(playerTwo + " won the game");
    }
}