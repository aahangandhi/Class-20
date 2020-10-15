var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("orange");  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x  < fixedRect.width/2 + movingRect.width/2 
 )
 {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
 }


if(   fixedRect.y - movingRect.y  < fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y - fixedRect.y  < fixedRect.height/2 + movingRect.height/2) 
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
  }


  drawSprites();
}