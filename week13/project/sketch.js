const gravConst = 1000;

class Planet {
  constructor(x, y, vx, vy, ax, ay, d){
    this.locationX = x;
    this.locationY = y;
    this.velX = vx;
    this.velY = vy;
    this.accX = ax;
    this.accY = ay;
    this.size = d;
    this.planCol = color(random(255), random(255), random(255));
  }

  gravityToAccel(gravityX, gravityY){
     this.accX += gravityX;
     this.accY += gravityY;
  }

  accelToVelocity(){
    this.velX += this.accX;
    this.velY += this.accY;
  }

  velocityToMovement(){
    this.locationX += this.velX;
    this.locationY += this.velY;
  }

  draw(){
    fill(this.planCol);
    circle(this.locationX, this.locationY, this.size);
  }

  collideWithSun(){
    //stops movement of object if it gets too close to Sun
    this.accX = 0;
    this.accY = 0;
    this.velX = 0;
    this.velY = 0;
  }
}

class Star {
  constructor(x, y, d, g){
    this.locationX = x;
    this.locationY = y;
    this.size = d;
    this.gravity = g;
  }

  pullPlanet(planet){
    //Gravitational Force = G(m1*m2/r^2)
    // m1 and m2 are mass of two objects in space (I use their size in this case)
    // r is the distance between them
    // G is the gravitational constant of an individual body in space (Earth's is 9.8)
    let pAccelX, pAccelY;
    let distance = dist(this.locationX, this.locationY, planet.locationX, planet.locationY);
    let force = gravConst * ((planet.size)/(distance * distance));

    
    if(distance > this.size/2){
      //picking direction of force on a 2D plane
      if(this.locationX > planet.locationX){
        pAccelX = force;
      }
      else{
        pAccelX = -force;
      }
      if(this.locationY > planet.locationY){
        pAccelY = force;
      }
      else{
        pAccelY = -force;
      }
    planet.gravityToAccel(pAccelX, pAccelY);
  }
  else{
    planet.collideWithSun();
  }
}
  draw(){
    fill(255);
    circle(this.locationX, this.locationY, this.size);
  }
}


var planetArray = [];
var sun;

function fillArray(planetNum){
  let newOrigX, newOrigY, newVelX, newVelY, newAccX, newAccY, newSize;
  let topOrBottom;
  
  for(let x = 0; x < planetNum; x++){
    //set semi-random properties for new planet object
    newOrigX = random(0, width);
    if((newOrigX > (width/2 + 120)) || (newOrigX < (width/2 - 120))){
      //X value location is far enough away from center
      newOrigY = random(0, height);
    }
    else{
      //x value too close to center, y value forced to distance from center
      topOrBottom = random(0,1);
      //50-50 chance of starting above or below center
      if(topOrBottom > 0.5){
        newOrigY = random(height/2 + 100, 800);
      }
      else{
        newOrigY = random(0, height/2 - 100);
      }
    }
    //set velocity and acceleration
    newVelX = random(-15.0, 15.0);
    newVelY = random(-15.0, 15.0);
    newAccX = 0;
    newAccY = 0;
    newSize = random(5, 10);
    //add new planet to array
    planetArray[x] = new Planet(newOrigX, newOrigY, newVelX, newVelY, newAccX, newAccY, newSize);
  }
}

function updatePlanets(){
  for(let i = 0; i < planetArray.length; i++){
    sun.pullPlanet(planetArray[i]);
    planetArray[i].accelToVelocity();
    planetArray[i].velocityToMovement();
  }
}

function setup() {
  createCanvas(1000, 1000);
  fillArray(10);
  frameRate(5);
  sun = new Star(width/2, height/2, 80, 0.1);

}

function draw() {
  background(0);
  fill(255);
  sun.draw();
  for(let y = 0; y < planetArray.length; y++){
    planetArray[y].draw();
  }
  updatePlanets();
}

function mousePressed(){
  noLoop();
}
