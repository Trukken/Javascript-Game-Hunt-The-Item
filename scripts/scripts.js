let cuby = document.querySelector(".playerKeyBoard");
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
            console.log(40);
            cubyPosX += 1;
            break;
        case 37:
            console.log(37);
            cubyPosY += -1;
            break;
        case 38:
            console.log(38);
            cubyPosX += -1;
            break;
        case 39:
            console.log(39);
            cubyPosY += 1;
            break;
    }
    let pozX = cubyPosX + "%";
    let pozY = cubyPosY + "%";
    cuby.style.top = pozX;
    cuby.style.left = pozY;
    console.log(pozX, pozY);
}
