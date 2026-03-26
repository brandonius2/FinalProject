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
let spawnY;
let scaleX;
let scaleY;
let vel = 3;
let downCount = 0;
let rightCount = 0;
let upCount = 0;
let leftCount = 0;
let kirk;

function preload() {
  downArrow = loadImage("downArrow.png");
  rightArrow = loadImage("downArrow.png");
  upArrow = loadImage("downArrow.png");
  leftArrow = loadImage("downArrow.png");
  kirk = loadSound("kirk.mp3");
}

function setup() {
  createCanvas(675, 575);
  spawnY = -100;
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
  imageMode(CENTER);
  frameRate(60);
  arrowFrames = [0.679, 0.971, 1.012, 1.2, 1.325, 1.638, 2.888, 3.18, 3.221, 3.409, 3.722, 4.035, 5.285, 5.577, 5.618, 5.806, 5.931, 6.244];
  arrowTypes = [1, 2, 1, 2, 1, 2, 2, 3, 2, 3, 2, 3, 3, 4, 3, 4, 3, 4];
  kirk.play();
}

function draw() {
  background(220);
  push();
  translate(width * 0.4, height * 0.75);
  image(downArrow, 0, 0, scaleX, scaleY);
  pop();
  push();
  translate(width * 0.8, height * 0.75);
  rotate(radians(270));
  image(rightArrow, 0, 0, scaleX, scaleY);
  pop();
  push();
  translate(width * 0.6, height * 0.75);
  rotate(radians(180));
  image(upArrow, 0, 0, scaleX, scaleY);
  pop();
  push();
  translate(width * 0.2, height * 0.75);
  rotate(radians(90));
  image(leftArrow, 0, 0, scaleX, scaleY);
  pop();
  if (downCount > 0) {
    for (let i = 0; i < downCount; i++) {
      push();
      translate(width * 0.4, downYPos[i]);
      image(downArrow, 0, 0, scaleX, scaleY);
      pop();
      downYPos[i] += vel;
    }
  }
  if (rightCount > 0) {
    for (let i = 0; i < rightCount; i++) {
      push();
      translate(width * 0.8, rightYPos[i]);
      rotate(radians(270));
      image(rightArrow, 0, 0, scaleX, scaleY);
      pop();
      rightYPos[i] += vel;
    }
  }
  if (upCount > 0) {
    for (let i = 0; i < upCount; i++) {
      push();
      translate(width * 0.6, upYPos[i]);
      rotate(radians(180));
      image(upArrow, 0, 0, scaleX, scaleY);
      pop();
      upYPos[i] += vel;
    }
  }

  if (leftCount > 0) {
    for (let i = 0; i < leftCount; i++) {
      push();
      translate(width * 0.2, leftYPos[i]);
      rotate(radians(90));
      image(leftArrow, 0, 0, scaleX, scaleY);
      pop();
      leftYPos[i] += vel;
    }
  }
  if (arrowFrames.length > 0) {
    if (frameCount >= arrowFrames[0] * 60) {
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
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    if (downCount > 0) {
      downYPos.splice(0, 1);
      downCount--;
    }
  } else if (keyCode === UP_ARROW) {
    if (upCount > 0) {
      upYPos.splice(0, 1);
      upCount--;
    }
  } else if (keyCode === LEFT_ARROW) {
    if (leftCount > 0) {
      leftYPos.splice(0, 1);
      leftCount--;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (rightCount > 0) {
      rightYPos.splice(0, 1);
      rightCount--;
    }
  }
}

function spawnLeft() {
  leftYPos.push(spawnY);
  leftCount++;
}

function spawnRight() {
  rightYPos.push(spawnY);
  rightCount++;
}

function spawnUp() {
  upYPos.push(spawnY);
  upCount++;
}

function spawnDown() {
  downYPos.push(spawnY);
  downCount++;
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
