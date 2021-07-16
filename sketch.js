var jaxon, edges, jaxon_running;
var pathImage,path;

var coin,coinimg

var bomb,bombimg

var energyDrink,energyDrinkimg

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("runner-1.png","runner-2.png",);
  pathImage = loadImage("path.png")
  coinimg= loadImage("coin.png")
  bombimg= loadImage("bomb.png")
  energyDrinkimg= loadImage("energyDrink.png")
}

function setup(){
  createCanvas(250,600);
  //create sprites here

  //creating the path
  path=createSprite(120,300,300,20);
  path.addImage(pathImage);
  path.scale=1.2;

  // creating jaxon
  jaxon= createSprite(100,500,20,50);
  jaxon.addAnimation("running", jaxon_running);
  edges = createEdgeSprites();
  
  //adding scale and position to jaxon
  jaxon.scale = 0.10;
  jaxon.x = 130

}

function draw() {
  background(0);

  path.velocityY=10 

  if(path.y>600){
    path.y=100;

    coins();
    bomb();
    energyDrink();
  }

function coins(){
  if(frameCount%2===0){
    coin=createSprite(150,600,30,30);
    coin.velocityY=10;
    coin.y=Math.round(random(50,300));
    coin.addImage(coinimg);
    coin.scale=0.5;
    coin.depth=jaxon.depth;
    jaxon.depth=jaxon.depth+1;
     }
    }

  function bomb(){
   if(frameCount%4===0){
     bomb=createSprite(50,500,30,30);
     bomb.velocityY=10;
     bomb.y=Math.round(random(80,100));
     bomb.addImage(bombimg);
     bomb.scale=0.1;
     bomb.depth=jaxon.depth;
     jaxon.depth=jaxon.depth+1;
         }
        }

  function energyDrink(){
   if(frameCount%8===0){
     energyDrink=createSprite(80,600,30,30);
     energyDrink.velocityY=10;
     energyDrink.y=Math.round(random(20,500));
     energyDrink.addImage(energyDrinkimg);
     energyDrink.scale=0.15;
     energyDrink.depth=jaxon.depth;
     jaxon.depth=jaxon.depth+1;
         }
        }
    

  drawSprites();
}

  

