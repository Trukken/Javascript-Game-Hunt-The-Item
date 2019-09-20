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
const numberOfGames = 5;
let info = 0;
let cubySpeed = 1;
let cubySize = 2;
const winStreakControl = 2;
const cubyHeight = 10;
const cubyWidth = 10;
const timerTimeout = 30000;

promptName();
start();

function start() {
    cuby.style.backgroundColor = "blue";
    playerOneScoreDisplay.innerText = playerOneScore;
    playerTwoScoreDisplay.innerText = playerTwoScore;
    time = setTimeout(gameOver, timerTimeout);
    document.addEventListener("keydown", moveCube); // Passes the event without even calling it
    cuby.addEventListener("click", touched);
}
function moveCube(e) {
    console.log(cubyPosX, cubyPosY);
    console.log(e);
    switch (e.keyCode) {
        case 40:
            cubyPosX += cubySpeed;
            break;
        case 37:
            cubyPosY += -cubySpeed;
            break;
        case 38:
            cubyPosX += -cubySpeed;
            break;
        case 39:
            cubyPosY += cubySpeed;
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
    info++;
    checkPlayerScore();
}

function gameOver() {
    cuby.style.backgroundColor = "green";
    document.removeEventListener("keydown", moveCube);
    cuby.removeEventListener("click", touched);
    alert(playerOne + " Keyboard player won!!!");
    playerOneScore++;
    if (info >= 0) {
        info--;
    }
    checkPlayerScore();
}

function promptName() {
    playerOne = prompt("Give the name of Keyboard Player");
    playerTwo = prompt("Give the name of Mouse Player");
    playerOneDisplay.innerText = playerOne + ": ";
    playerTwoDisplay.innerText = playerTwo + ": ";
}

function checkPlayerScore() {
    playerOneScoreDisplay.innerText = playerOneScore;
    playerTwoScoreDisplay.innerText = playerTwoScore;
    if (playerOneScore >= numberOfGames) {
        alert(playerOne + " won the game");
    } else if (playerTwoScore >= numberOfGames) {
        alert(playerTwo + " won the game");
    } else {
        replayButton.style.display = "block";
        replayButton.addEventListener("click", replayClicked);
    }
    if (info >= winStreakControl) {
        cubySpeed = 3;
        cuby.style.height = (cubyHeight / cubySize) + "%";
        cuby.style.width = (cubyWidth / cubySize) + "%";

    } else if (info < winStreakControl && info > 0) {
        cubySpeed = 2;
        cuby.style.height = cubyHeight + "%";
        cuby.style.width = cubyWidth + "%";
    } else if (info == 0) {
        cubySpeed = 1;
        cuby.style.height = cubyHeight + "%";
        cuby.style.width = cubyWidth + "%";
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