let cuby = document.querySelector(".playerKeyBoard");
let playerArea = document.querySelector(".playerArea");
let playerOneDisplay = document.querySelector("#keyName");
let playerTwoDisplay = document.querySelector("#muuzeName");
let replayButton = document.querySelector("#replay");
let playerOneScoreDisplay = document.querySelector("#keyScore");
let playerTwoScoreDisplay = document.querySelector("#muuzeScore")
const startingX = 70;
const startingY = 50;
let cubyPosX = startingX;
let cubyPosY = startingY;
let playerOne;
let playerTwo;
let playerOneScore = 0;
let playerTwoScore = 0;
let time;

promptName();
start();

function start() {
    cuby.style.backgroundColor = "blue";
    playerOneScoreDisplay.innerText = playerOneScore;
    playerTwoScoreDisplay.innerText = playerTwoScore;
    time = setTimeout(gameOver, 3000);
    document.addEventListener("keydown", moveCube); // Passes the event without even calling it
    cuby.addEventListener("click", touched);
}
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


function touched() {
    cuby.style.backgroundColor = "red";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert(playerTwo + " Muuuse player won!!!");
    clearTimeout(time);
    playerTwoScore++;
    checkPlayerScore();
}

function gameOver() {
    cuby.style.backgroundColor = "green";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert(playerOne + " Keyboard player won!!!");
    playerOneScore++;
    checkPlayerScore();
}

function promptName() {
    playerOne = prompt("Give the name of Keyboard Player");
    playerTwo = prompt("Give the name of Mouse Player");
    playerOneDisplay.innerText = playerOne + ": ";
    playerTwoDisplay.innerText = playerTwo + ": ";
}

function checkPlayerScore() {
    if (playerOneScore >= 3) {
        alert(playerOne + " won the game");
    } else if (playerTwoScore >= 3) {
        alert(playerTwo + " won the game");
    } else {
        replayButton.style.display = "block";
        replayButton.addEventListener("click", replayClicked);
    }
}

function replayClicked() {
    replayButton.style.display = "none";
    cuby.style.top = startingX + "%";
    cuby.style.left = startingY + "%";
    cubyPosX = startingX;
    cubyPosY = startingY;
    start();
}