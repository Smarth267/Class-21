var fixedRect, movingRect;
var o1, o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(100,40,30,20);
  o1.shapeColor = "yellow"
  o2 = createSprite(300,50,40,30);
  o2.shapeColor = "yellow"
  o3 = createSprite(450,60,50,40);
  o3.shapeColor = "yellow"
  o4 = createSprite(600,70,60,50);
  o4.shapeColor = "yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(o3,movingRect)){ 
  o3.shapeColor="blue";
  movingRect.shapeColor="white";
  }
  else {
o3.shapeColor="yellow";
movingRect.shapeColor="green";

  }

  drawSprites();
}




