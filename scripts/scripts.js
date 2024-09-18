let cuby = document.querySelector('.playerKeyBoard')
let playerArea = document.querySelector('.playerArea')
let playerOneDisplay = document.querySelector('#keyName')
let playerTwoDisplay = document.querySelector('#muuzeName')
let replayButton = document.querySelector('#replay')
let playerOneScoreDisplay = document.querySelector('#keyScore')
let playerTwoScoreDisplay = document.querySelector('#muuzeScore')
let ammoCounter = document.querySelector('#ammo')
const startingX = 50
const startingY = 80
let cubyPosX = startingX
let cubyPosY = startingY
let playerOne
let playerTwo
let playerOneScore = 0
let playerTwoScore = 0
let time
const numberOfGames = 5
let info = 0
let cubySpeed = 1
let cubySize = 1.5
const winStreakControl = 2
const cubyHeight = 10
const cubyWidth = 8
const timerTimeout = 30000

let flagUp = false
let flagDown = false
let flagLeft = false
let flagRight = false

let posX = startingX
let posY = startingY

let accX = 0
let accY = 0
var vitX = 0
var vitY = 0

let power = 0.02
let friction = 0.90
let defaultAmmoCount = 25
let ammo = defaultAmmoCount

promptName()
start()
function start () {
  cuby.style.backgroundColor = 'blue'
  playerOneScoreDisplay.innerText = playerOneScore
  playerTwoScoreDisplay.innerText = playerTwoScore
  ammoCounter.innerText = "Ammo:" + ammo
  time = setTimeout(timeUp, timerTimeout)
  document.addEventListener('keydown', moveCube) // Passes the event without even calling it
  cuby.addEventListener('click', touched)
  playerArea.addEventListener('click', shoot)
}

//! Credit goes to Igor Marty https://codepen.io/IMarty/
setInterval(function () {
  if (flagUp)
    accY = accY - power
  if (flagDown)
    accY = accY + power
  if (flagLeft)
    accX = accX - power
  if (flagRight)
    accX = accX + power

  accY = accY * 0.95
  accX = accX * 0.95

  vitY = (vitY + accY) * friction
  vitX = (vitX + accX) * friction

  posY = posY + vitY
  posX = posX + vitX

  if (posX > 90) {
    posX = 10
  } else if (posX < 10) {
    posX = 90
  }
  if (posY > 90) {
    posY = 10
  } else if (posY < 10) {
    posY = 90
  }

  cuby.style.top = posY + '%',
  cuby.style.left = posX + '%'
}, 1000 / 60)

function moveCube (e) {
  console.log(e)
  switch (e.keyCode) {
    case 83:
      flagDown = true
      break
    case 87:
      flagUp = true
      break
    case 68:
      flagRight = true
      break
    case 65:
      flagLeft = true
      break
  }

/*let pozX = cubyPosX + '%'
let pozY = cubyPosY + '%'
cuby.style.top = pozX
cuby.style.left = pozY
console.log(pozX, pozY)*/
}
document.addEventListener('keyup', stopCube)

function stopCube (e) {
  switch (e.keyCode) {
    case 83:
      flagDown = false
      break
    case 87:
      flagUp = false
      break
    case 68:
      flagRight = false
      break
    case 65:
      flagLeft = false
      break
  }
}

function touched () {
  unsetFalgs()
  cuby.style.backgroundColor = 'red'
  alert(playerTwo + ' Muuuse player won!!!')
  clearTimeout(time)
  playerTwoScore++
  info++
  checkPlayerScore()
}

function timeUp () {
  unsetFalgs()
  cuby.style.backgroundColor = 'green'
  alert(playerOne + ' Keyboard player won!!!')
  playerOneScore++
  if (info >= 0) {
    info--
  }
  checkPlayerScore()
}

function promptName () {
  playerOne = prompt('Give the name of Keyboard Player')
  playerTwo = prompt('Give the name of Mouse Player')
  playerOneDisplay.innerText = playerOne + ': '
  playerTwoDisplay.innerText = playerTwo + ': '
}

function checkPlayerScore () {
  playerOneScoreDisplay.innerText = playerOneScore
  playerTwoScoreDisplay.innerText = playerTwoScore
  if (playerOneScore >= numberOfGames) {
    alert(playerOne + ' won the game')
  } else if (playerTwoScore >= numberOfGames) {
    alert(playerTwo + ' won the game')
  } else {
    replayButton.style.display = 'block'
    replayButton.addEventListener('click', replayClicked)
  }
  if (info >= winStreakControl) {
    power = 0.04
    cuby.style.height = (cubyHeight / cubySize) + '%'
    cuby.style.width = (cubyWidth / cubySize) + '%'
  } else if (info < winStreakControl && info > 0) {
    power = 0.035
    cuby.style.height = cubyHeight + '%'
    cuby.style.width = cubyWidth + '%'
  } else if (info == 0) {
    power = 0.02
    cuby.style.height = cubyHeight + '%'
    cuby.style.width = cubyWidth + '%'
  }
}

function replayClicked () {
  replayButton.style.display = 'none'
  cuby.style.top = startingX + '%'
  cuby.style.left = startingY + '%'
  posX = startingX
  posY = startingY
  ammo = defaultAmmoCount
  start()
}

function shoot() {
  if(--ammo < 1) {
    unsetFalgs()
    cuby.style.backgroundColor = 'green'
    document.removeEventListener('keydown', moveCube)
    cuby.removeEventListener('click', touched)
    alert(playerOne + ' Keyboard player won!!!')
    playerOneScore++
    if (info >= 0) {
      info--
    }
    checkPlayerScore()
  }
  ammoCounter.innerText = "Ammo:" + ammo
}

function unsetFalgs() {
  flagDown = false
  flagUp = false
  flagRight = false
  flagLeft = false
  document.removeEventListener('keydown', moveCube)
  cuby.removeEventListener('click', touched)
  playerArea.removeEventListener('click', shoot)
}
