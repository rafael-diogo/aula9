var cubo

function setup() {
  createCanvas(1000,600);

  cubo=createSprite(500,300,200,200)
  cubo.shapeColor="black"
}

function draw() 
{
  background("blue");

  if(keyIsDown(UP_ARROW)){
    cubo.y=cubo.y-3
    background("green");
  }
drawSprites()
}




