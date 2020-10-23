var movingRect,fixedRect;
//creating sprites
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600, 200, 70, 10);
  movingRect.shapeColor="green";
  fixedRect=createSprite(400,200,50,50);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=5;
  movingRect.velocityX=-5;

  rect1=createSprite(600,100,70,10);
  rect2=createSprite(600,300,50,50);
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  rect1.velocityY=5;
  rect2.velocityY=-5;
}

function draw() {
  background(0,0,0);  

 //to change the color when collided
 bounceOff(rect1,rect2);
 bounceOff(movingRect,fixedRect);
  drawSprites();
}
