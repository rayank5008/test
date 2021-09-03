var path
var power
var runner1,running_1
var runner2,running_2
var invisibleGround1
var invisibleGround2
var bomb
var coin
var energyDrink



function preload(){
  //pre-load images
running_1=loadingAnimation ("Runner-1.png")
running_2=loadingAnimation("Runner-2.png")
path=loadingAnimation("path.png")
bomb=loadingAnimation("bomb.png")
coin=loadingAnimation("coin.png")
energyDrink=loadingAnimation("energyDrink")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,-100,10,10)
  path.scale=0.9
  path.velocityY=7
  path.tint='yellow'

  runner1=createSprite(200,300,30,10);
  runner1.addAnimation("Runner-1.png")
  runner1.scale=0.6 

  coin=createSprite(200,-100,20,20)
  coin.addAnimation("coin.png")
  coin.scale=0.3
  coin.velocityY=6

  bomb=createSprite(120,-300,10,10)
  bomb.addAnimation("bomb.png")
  bomb.scale= 0.05
  bomb.velocityY=6

  energyDrink=createSprite(200,-200,10,10)
  energyDrink.addAnimation("energyDrink.png")
  energyDrink.scale=0.05
  energyDrink.velocityY=9

  runner2=createSprite(180,300,10,10)
  runner2.addAnimation("Runner-2.png")
  runner2.scale=0.6

  invisibleGround1=createSprite(370,200,100,400);
  invisibleGround1.visible= false

  invisibleGround2=createSprite(40,200,100,400);
  invisibleGround2.visible=false
}

function draw() {
  if(path.y>400){
    path.y=height/2
  }
  runner1,runner2.x=mouse.X;
  runner1,runner2.collide(invisibleGround);
  runner1,runner2.collide(invisibleGround2);
  edges=createEdgeSprites()
  background(0);

  drawSprites()


}
