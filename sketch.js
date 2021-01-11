var fixedRect, movingRect;
var p,q,r,s;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  p = createSprite(100, 200, 50, 80);
  p.shapeColor = "green";
  q = createSprite(600, 200,80,30);
  q.shapeColor = "green";
  q.velocityX = -5;
  p.velocityX = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(p,q);   
  isTouching(p,q);
  drawSprites();
}

