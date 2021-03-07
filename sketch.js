var balloon,background;

function preload(){
  backgroundImage = loadImage("pro-C35 images/Hot Air Ballon-01.png");
  balloonImage = loadAnimation("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-04.png");

}



function setup() {
  database = firebase.database();
  //console.log(database)
 
  createCanvas(500,500);
  balloon = createSprite(100,400,20,20);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background(backgroundImage); 

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
  }

  drawSprites();
}