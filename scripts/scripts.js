let playerKeyBoard= document.querySelector(".cuby");
let playerArea = document.querySelector(".playerArea");
let cubyPosX = 70;
let cubyPosY = 50;
document.addEventListener("keydown", function (e) {
    console.log(e);
    moveCube(e);
});

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
    playerKeyBoard.style.top = pozX;
    playerKeyBoard.style.left = pozY;
    console.log(pozX, pozY);
}
