let arrowFrames;
let arrowTypes;
let downArrow;
let rightArrow;
let upArrow;
let leftArrow;
let downYPos = [];
let leftYPos = [];
let upYPos = [];
let rightYPos = [];
let arrows = [];
let spawnY;
let scaleX;
let scaleY;
let vel;
let kirk;
let firstNPos;
let secondNPos;
let thirdNPos;
let fourthNPos;
let firstArrow;
let secondArrow;
let thirdArrow;
let fourthArrow;
let arrowCount = 0;

class Note {
  constructor(t, y){
    this.type = t;
    this.yPos = y;
    this.speed = vel;
    if (t == 1){
      this.xPos = firstNPos;
    }
    else if (t == 2){
      this.xPos = secondNPos;
    }
    else if (t == 3){
      this.xPos = thirdNPos;
    }
    else if (t == 4){
      this.xPos = fourthNPos;
    }
    
  }

  render(){
    if (this.type == 1){
      push();
      translate(this.xPos, this.yPos);
      rotate(radians(90));
      image(leftArrow, 0, 0, scaleX, scaleY);
      pop();
    }
    else if (this.type == 2){
      push();
      translate(this.xPos, this.yPos);
      image(downArrow, 0, 0, scaleX, scaleY);
      pop();
    }
    else if (this.type == 3){
      push();
      translate(this.xPos, this.yPos);
      rotate(radians(180));
      image(upArrow, 0, 0, scaleX, scaleY);
      pop();
    }
    else if (this.type == 4){
      push();
      translate(this.xPos, this.yPos);
      rotate(radians(270));
      image(rightArrow, 0, 0, scaleX, scaleY);
      pop();
    }
    
  }

  move(){
    this.yPos += this.speed * deltaTime;
  }
  
  

  
}

function preload() {
  downArrow = loadImage("downArrow.png");
  rightArrow = loadImage("downArrow.png");
  upArrow = loadImage("downArrow.png");
  leftArrow = loadImage("downArrow.png");
  kirk = loadSound("kirk.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnY = - (height * 0.25);
  // downYPos.push(spawnY);
  // downCount++;
  // rightYPos.push(spawnY);
  // rightCount++;
  // leftYPos.push(spawnY);
  // leftCount++;
  // upYPos.push(spawnY);
  // upCount++;
  scaleX = 50;
  scaleY = 50;
  vel = 0.3;
  imageMode(CENTER);
  frameRate(60);
  arrowFrames = [0.679, 0.971, 1.012, 1.2, 1.325, 1.638, 2.888, 3.18, 3.221, 3.409, 3.722, 4.035, 5.285, 5.577, 5.618, 5.806, 5.931, 6.244];
  arrowTypes = [1, 2, 1, 2, 1, 2, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4];
  kirk.play();
  firstNPos = width * 0.2;
  secondNPos = width * 0.4;
  thirdNPos = width * 0.6;
  fourthNPos = width * 0.8;
  firstArrow = new Note(1, height * 0.75);
  secondArrow = new Note(2, height * 0.75);
  thirdArrow = new Note(3, height * 0.75);
  fourthArrow = new Note(4, height * 0.75);
}

function draw() {
  background(220);
  let currentSec = millis() / 1000;
  console.log(currentSec);
  firstArrow.render();
  secondArrow.render();
  thirdArrow.render();
  fourthArrow.render();

  if (arrowFrames.length > 0){
    if (currentSec >= arrowFrames[0]) {
      if (arrowTypes[0] == 1) {
        spawnLeft();
        arrowFrames.splice(0, 1);
        arrowTypes.splice(0, 1);
      } else if (arrowTypes[0] == 2) {
        spawnDown();
        arrowFrames.splice(0, 1);
        arrowTypes.splice(0, 1);
      } else if (arrowTypes[0] == 3) {
        spawnUp();
        arrowFrames.splice(0, 1);
        arrowTypes.splice(0, 1);
      } else if (arrowTypes[0] == 4) {
        spawnRight();
        arrowFrames.splice(0, 1);
        arrowTypes.splice(0, 1);
      }
    }
  }
  if (arrowCount > 0){
    for (let i = 0; i < arrowCount; i++){
      arrows[i].render();
      arrows[i].move();
    }
  }

  
}

function keyPressed() {
  if (key == 'd') {
    if (arrowCount > 0 && arrows[0].type == 1){      
      arrows.splice(0, 1);
      arrowCount--;  
    }
    
  } else if (key == 'f') {
     if (arrowCount > 0 && arrows[0].type == 2){      
      arrows.splice(0, 1);
      arrowCount--;  
    }
  } else if (key == 'h') {
     if (arrowCount > 0 && arrows[0].type == 3){      
      arrows.splice(0, 1);
      arrowCount--;  
    }
  } else if (key == 'j') {
     if (arrowCount > 0 && arrows[0].type == 4){      
      arrows.splice(0, 1);
      arrowCount--;  
    }
  }
}

function spawnLeft() {
  let tempNote = new Note(1, spawnY);
  arrows.push(tempNote);
  arrowCount++;
}

function spawnRight() {
  let tempNote = new Note(4, spawnY);
  arrows.push(tempNote);
  arrowCount++;
}

function spawnUp() {
  let tempNote = new Note(3, spawnY);
  arrows.push(tempNote);
  arrowCount++;
}

function spawnDown() {
  let tempNote = new Note(2, spawnY);
  arrows.push(tempNote);
  arrowCount++;
  console.log("arrow spawned");

}

function spawnRand() {
  let r = random(0, 4);
  r = floor(r);
  if (r == 0) {
    spawnUp();
  } else if (r == 1) {
    spawnDown();
  } else if (r == 2) {
    spawnRight();
  } else if (r == 3) {
    spawnLeft();
  }
}
