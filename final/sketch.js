var startScreenBlink = 0;
var gameStarted = false;
var fireSound, explosionSound, pauseSound, gameOverSound;
var titleBGM, levelBGM;
var bgImg, shipImg, explosionGraphic, enemyImg1, controlDiagram;
var gamePause = false;
var spawnIntervalID;
var gameOver = false;


class BackGround{
  constructor(m){
    this.originX1 = 0;
    this.originX2 = 1000;
    this.graphic = m;
  }

  updateBG(){
    this.originX1 -= 1;
    this.originX2 -= 1;
    if(this.originX1 <= -1000){
      this.originX1 = 1000;
    }
    if(this.originX2 <= -1000){
      this.originX2 = 1000;
    }
  }

  displayBG(){
    image(this.graphic, this.originX1, 0, width, height);
    image(this.graphic, this.originX2, 0, width, height);
    fill(0);
    rect(0, height - 60, width, 60);
    fill(255);
    textSize(30);
    text("Lives: " + ship.lives, 75, 580);
    text("Score: " + playerScore, 920, 580);
  }
}
class Player{
  constructor(){
    this.coordX = 100;
    this.coordY = 300;
    this.velX = 0;
    this.velY = 0;
    this.accX = 0;
    this.accY = 0;
    this.shots = [];
    this.alive = true;
    this.deadCount = 0;
    this.lives = 3;
    this.expIndex = 0;
  }

  move(dirX, dirY){
    if((this.accX + dirX >= -3) && 
      (this.accX  + dirX <= 3 )){
    this.accX += dirX;
    }
    if((this.accY + dirY >= -3) && 
      (this.accY  + dirY <= 3 )){
      this.accY += dirY;
    }
  }

  updateCoord(){
    //adds acceleration to velocity
    if((this.velX  + this.accX >= -10) && (this.velX + this.accX <= 10 )){
    this.velX += this.accX;
    }
    if((this.velY  + this.accY >= -10) && (this.velY + this.accY <= 10 )){
    this.velY += this.accY;
    }
    //update x coordinate
    if(this.coordX <= 300 && this.coordX >= 0){
      this.coordX += this.velX;
    }
    else if(this.coordX > 300){
      //stops player if they reach edge
      this.coordX = 300;
      this.velX = 0;
      this.accX = 0;
    }
    else if(this.coordX < 0){
      this.coordX = 0;
      this.velX = 0;
      this.accX = 0;
    }
    //update y coordinate
    if(this.coordY <= height && this.coordY >= 0){
      this.coordY += this.velY;
    }
    else if(this.coordY > height){
      //stops player if they reach edge
      this.coordY = height;
      this.velY = 0;
      this.accY = 0;
    }
    else if(this.coordY < 0){
      this.coordY = 0;
      this.velY = 0;
      this.accY = 0;
    }
    //console.log("accX: " + this.accX + ", accY: " + this.accY);
  }

  fire(){
    //new projectile added to list, plays sound
    let newShot = new Projectile(this.coordX, this.coordY, random(1,1000));
    this.shots.push(newShot);
    fireSound.play();
  }

  updateShots(){
    //projectiles currently in list move to the right
    if(this.shots.length > 0){
      for(let x = 0; x < this.shots.length; x++){
        if(this.shots[x].updateCoord() || (!this.shots[x].live)){
          //remove from list -------------
          this.removeShot(this.shots[x].index);
        }
      }
    }
  }

  removeShot(index){
    const updatedArray = this.shots.filter((proj) => {
      return proj.index !== index;
    });
    this.shots = updatedArray;
  }

  drawPlayer(){
    let spriteX, sheetIndex, spriteY = 0;
    if(this.alive){
      if(this.velY < -2){
      image(shipImg, this.coordX, this.coordY, 86, 36, 172, 0, 86, 36);
      }
      else if(this.velY > 2){
        image(shipImg, this.coordX, this.coordY, 86, 36, 86, 0, 86, 36);
      }
      else{
        image(shipImg, this.coordX, this.coordY, 86, 36, 0, 0, 86, 36);
      }
    }
    else{
      spriteX = 0;
      sheetIndex = 979/5;
        if(this.deadCount < 30){
        if(this.deadCount % 3 === 0){
          this.expIndex += 1;
        }
        if(this.expIndex >= 5){
          this.expIndex = 0;
        }
        if(this.deadCount > 15){
          spriteY = 167;
        }
        spriteX = sheetIndex * this.expIndex;
        image(explosionGraphic, this.coordX, this.coordY, 100, 100, spriteX, spriteY, sheetIndex, 167);
      }
    }
  }

  drawShots(){
    if(this.shots.length > 0){
      for(let y = 0; y < this.shots.length; y++){
      this.shots[y].drawShot();
      }
    }
  }

  slowPlayerX(){
    //console.log("slowing");
    if(this.velX > 0){
      this.accX = -1;
    }
    else if(this.velX < 0){
      this.accX = 1;
    }
    else{
      this.accX = 0;
    }

  }

  slowPlayerY(){
    //console.log("slowing");
    if(this.velY > 0){
      this.accY = -1;
    }
    else if(this.velY < 0){
      this.accY = 1;
    }
    else{
      this.accY = 0;
    }
  }
}

class Projectile{
  constructor(x, y, i){
    this.coordX = x + 50;
    this.coordY = y + 18;
    this.index = i;
    this.live = true;
  }

  updateCoord(){
    if(this.coordX < width + 50){
    this.coordX += 20;
    return false;
    }
    else{
      return true;
    }
  }

  drawShot(){
    fill(255);
    circle(this.coordX, this.coordY, 10);
  }

}

class Drone{
  constructor(x, y, i){
    this.coordX = x;
    this.coordY = y;
    this.index = i;
    this.live = true;
    this.deadCount = 0;
    this.animCount = 0;
    this.imgIndex = 0;
    this.expIndex = 0;
  }

  updateCoord(){
    if(this.live){
      if(this.coordX > -150){
      this.coordX -= 10;
      }
      else{
        this.live = false;
      }
  } else{
    if(this.deadCount < 30){
    this.deadCount += 1;
    }
  }
    
  }
  //Detect collision between enemy and object
  checkHit(x, y, w, h){
  let distanceX = this.coordX - x;
  let distanceY = this.coordY - y;
  let halfwidths = (w/2) + 27;
  let halfheights = (h/2) + 38;
  // If the distance is less than the sum of the radii, collision detected
  if((abs(distanceX) < halfwidths) &&
    (abs(distanceY) < halfheights)){
      return true;
  } else {
    return false;
  }

  }

  drawDrone(){
    let sheetIndex, spriteX, spriteY = 0;
    //cycle through sprite sheet if alive
    if(this.live){
      this.animCount += 1;

      if(this.animCount % 4 === 0){
        this.imgIndex += 1;
        if(this.imgIndex >= 5){
          this.imgIndex = 0;
        }
      }
      spriteX = 54 * this.imgIndex;
    image(enemyImg1, this.coordX, this.coordY, 54, 48, spriteX, 0, 54, 48);
    }
    else{ //if dead, cycle through explosion sheet
      spriteX = 0;
      sheetIndex = 979/5;
      if(this.deadCount < 30){
        if(this.deadCount % 3 === 0){
          this.expIndex += 1;
        }
        if(this.expIndex >= 5){
          this.expIndex = 0;
        }
        if(this.deadCount > 15){
          spriteY = 167;
        }
        spriteX = sheetIndex * this.expIndex;
        //console.log("deadcount: " + this.deadCount);
        //console.log("exp: " + spriteX + ", " + spriteY);
        image(explosionGraphic, this.coordX, this.coordY, 100, 100, spriteX, spriteY, sheetIndex, 167);
    }
    }
  }
  
}

var ship = new Player();
var enemiesList = [];
var spawnInterval = 0;
var bgScroll;
var playerScore = 0;
//sound and graphics preload----------------------------
function preload(){
  levelBGM = loadSound("sounds/level-bgm.mp3");
  titleBGM = loadSound("sounds/title-bgm.mp3");
  explosionSound = loadSound("sounds/explosion.mp3");
  fireSound = loadSound("sounds/laser.mp3");
  pauseSound = loadSound("sounds/pause.mp3");
  gameOverSound = loadSound("sounds/gameover.mp3");
  bgImg = loadImage("images/bg.png");
  explosionGraphic = loadImage("images/explosion.png");
  shipImg = loadImage("images/ship.png");
  enemyImg1 = loadImage("images/enemy1.png");
  controlDiagram = loadImage("images/controls.png");
  }

//initialize game---------------------------
function setup() {
  createCanvas(1000, 600);
  frameRate(1);
  textAlign(CENTER);
  titleBGM.loop();
  bgScroll = new BackGround(bgImg);
}

//Begins primary gameplay loop---------------
function startGame(){
  background(0);
  gameStarted = true;
  titleBGM.pause();
  
  frameRate(30);
  levelBGM.loop();
  spawnIntervalID = setInterval(spawnEnemies, 2000);
}

//player dies----------------------
function playerDeath(){
  ship.alive = false;
  //clear active projectiles
  if(ship.shots.length > 0){
    ship.shots = [];
  }
  //clear active enemies
  if(enemiesList.length > 0){
    enemiesList = [];
  }
  levelBGM.stop();
  clearInterval(spawnIntervalID);
  ship.lives -= 1;

}

function checkForCollisions(){
  //if enemy is close enough to projectile
    if(ship.shots.length > 0 && enemiesList.length > 0){
      for(let m = 0; m < enemiesList.length; m++){
        for(let n = 0; n < ship.shots.length; n++){
          if(enemiesList[m].live && ship.shots[n].live &&
            enemiesList[m].checkHit(ship.shots[n].coordX, ship.shots[n].coordY, 10, 10)){
            enemiesList[m].live = false;
            ship.shots[n].live = false;
            playerScore += 1;
            explosionSound.play();
          }
        }
    }
  }
  //if enemy is close enough to player
  if(ship.alive && enemiesList.length > 0){
    for(let e = 0; e < enemiesList.length; e++){
      if(enemiesList[e].live && 
          enemiesList[e].checkHit(ship.coordX, ship.coordY, 86, 36)){
          enemiesList[e].live = false;
          explosionSound.play();
          playerDeath();
        }
  }
}
  
}

//resets player to starting position 
function respawnPlayer(){
  if(ship.lives < 0){
    gameOver = true;
    gameStarted = false;
    gameOverSound.play();
  } else{
  ship.coordX = 100;
  ship.coordY = 300;
  ship.velX = 0;
  ship.velY = 0;
  ship.accX = 0;
  ship.accY = 0;
  ship.alive = true;
  ship.deadCount = 0;
  spawnIntervalID = setInterval(spawnEnemies, 2000);
  levelBGM.loop();
  }
}

function spawnEnemies(){
let enemyNum = random(1, 3);
for(let i = 0; i < enemyNum; i++){
  let spawn = new Drone(
    width + random(50,100), random(50, height - 120), random(0, 1000)
  );
  enemiesList.push(spawn);
}
}

function drawEnemies(){
  if(enemiesList.length > 0){
    for(let j = 0; j < enemiesList.length; j++){
    enemiesList[j].drawDrone();
    }
  }
}

function removeEnemy(index){
  const droneArray = enemiesList.filter((drone) => {
    return drone.index !== index;
  });
  //setGamesArray(updatedArray);
  enemiesList = droneArray;
}

function updateEnemies(){
  if(enemiesList.length > 0){
    for(let k = 0; k < enemiesList.length; k++){
      enemiesList[k].updateCoord();
      if(enemiesList[k].deadCount >= 30){
        removeEnemy(enemiesList[k].index);
      }
    }
  }
}

function playerMove(){
  //'w' is pressed
  if(ship.alive){
    if(keyIsDown(87)){
      ship.move(0,-1);
    }
    else if(keyIsDown(83)){//'s' is pressed
      ship.move(0,1);
    }
    else{
      ship.slowPlayerY();
    }

    if(keyIsDown(65)){//'a' is pressed
      ship.move(-1,0);
    }
    else if(keyIsDown(68)){//'d' is pressed
      ship.move(1,0);
    }
    else{
      ship.slowPlayerX();
    }

    ship.updateCoord();
  }
  else{
    if(ship.deadCount < 30){
    ship.deadCount += 1;
    }
    else{
      respawnPlayer();
    }
  }
  
  ship.updateShots();
}

function restartGame(){
  gameOver = false;
  gameStarted = true;
  ship.lives = 3;
  playerScore = 0;
  frameRate(30);
  respawnPlayer();
}

function draw() {
  background(0);
  if(gameStarted){
    //primary gameplay loop-------
    
    bgScroll.displayBG();
    ship.drawPlayer();
    ship.drawShots();
    drawEnemies();
    playerMove();
    bgScroll.updateBG();
    updateEnemies();
    checkForCollisions();
    
  }else{
    if(gameOver){ // game over screen
      frameRate(1);
      fill(255);
      textSize(76);
      text("Game Over", width/2, 300);
      textSize(40);
      text("Your Score: " + playerScore, width/2, 360);
      if(startScreenBlink % 2 === 0){
        textSize(24);
        text("Press Enter to Restart", (width/2) + 3, 415);
      }
      startScreenBlink += 1;
    }
    else{
    //Main menu--------
      fill(255);
      textSize(102);
      text("Gwadiuth", width/2, 250);
      if(startScreenBlink % 2 === 0){
        textSize(24);
        text("Press Enter to Begin", width/2, 320);
      }
      image(controlDiagram, 275, 400, 400, 110);
      startScreenBlink += 1;
    }
  }
}

//Take user input for movement, etc.
function keyPressed() {
  if(gameStarted){
    //console.log(key + " pressed");
    //  if (key === 'w') {
    //    ship.move(0,-1);
    //  } else if (key === 'a') {
    //    ship.move(-1,0);
    //  } else if (key === 's') {
    //    ship.move(0, 1);
    // } else if (key === 'd') {
    //    ship.move(1,0);
    // }

    if (keyCode === 32) {
      ship.fire();
    }
  }
  else{
    if (keyCode === ENTER) {
      if(gameOver){
        restartGame();
      } else{
      startGame();
      }
    }
  }
  
}
//click mouse to pause game------
function mousePressed(){
  if(gameStarted){
    if(gamePause){
      gamePause = false;
      levelBGM.loop();
      spawnIntervalID = setInterval(spawnEnemies, 2000);
      loop();
    } else {
    gamePause = true;
    levelBGM.pause();
    pauseSound.play();
    clearInterval(spawnIntervalID);
    noLoop();
    }
  }
}
