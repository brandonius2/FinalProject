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
  scaleX = width/13.5;
  scaleY = width/13.5;
  vel = height/191.667;
  imageMode(CENTER);
  frameRate(60);
  arrowFrames = [13.177, 13.602, 14.266, 14.898, 16.483, 16.869, 17.301, 17.738, 18.153, 18.966, 20.662, 21.081, 21.3, 21.514, 21.95, 22.413, 22.758, 23.23, 23.597, 24.013, 24.412, 24.836, 26.853, 27.409, 28.024, 29.205, 29.618, 30.053, 30.677, 31.263, 32.511, 32.896, 33.291];
  arrowTypes = [1, 2, 1, 2, 1, 2, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4, 4, 2, 3, 4, 2, 3, 4, 1, 1, 2, 3, 4, 3, 2, 1];
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
