var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,50,30,30);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  

  if (isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);

  //console.log(a.x-b.x);
  console.log(movingRect.y-fixedRect.y);

  drawSprites();
}

