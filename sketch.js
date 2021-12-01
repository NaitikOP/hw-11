
var path,pathImg;
var power;
var bomb;
var coin;
var energyDrink;
var boy,boyImg;

function preload(){
  //pre-load images
pathImg = loadImage("path.png")
boyImg = loadAnimation("Runner1.png","Runner2.png")
//bomb = loadImage("bomb.png")
//power = loadImage("power.png")
//energyDrink = loadImage("energyDrink.png")
//coin = loadImage("coin.png")

  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.2;

boy = createSprite(180,340);
boy.addAnimation("boy",boyImg);
boy.scale = 0.08;
  
  


}
  

function draw(){
  



  background(0);
  boy.x = World.mouseX
  if(path.y > 400){
    path.y = height/2;

  }
  drawSprites()
  }

