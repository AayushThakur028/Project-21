var rectangle1,rectangle2;
var 

function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(600, 200, 50, 100);
  rectangle1.velocityX=-2;
  rectangle2 = createSprite(200, 200, 100, 50);
  rectangle2.velocityX=2;
}

function draw() {
  background(255,255,255);  
  if(rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2
      && rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
    ){
      rectangle1.velocityX=rectangle1.velocityX*-1;   
      rectangle2.velocityX=rectangle2.velocityX*-1;
  }
  drawSprites();
}