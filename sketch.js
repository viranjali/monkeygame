var survivalTime;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var food; 
var obstacle;

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
   
  FoodGroup = new Group();
  ObstacleGroup = new Group();
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x= ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  stroke("white");
 textSize(20);
  fill("black");
  text("score: "+ score, 500,50);

  stroke("black");
 textSize(20);
  fill("black");
 survivalTime=Math.ceil(frameCount/frameRate());
  if(monkey.isTouching(ObstacleGroup)){
    ground.velocityX = 0;
    monkey.velocityY = 0;
    ObstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ObstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  text("survival Time: "+ survivalTime, 100,50);
  food();
  obstacles();
  monkey.collide(ground)
  drawSprites();
}

  function food() {
    if( frameCount%100===0){
      
    
   banana=createSprite(600,30,20,20);
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.lifetime = 300;
   banana.velocityX = -6;
   banana.y = random(120,200);
   FoodGroup.add(banana);
 }
  }
 
  function obstacles() {
    if(frameCount%250===0){
   obstacle =createSprite(600,327,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.lifetime=300;
   obstacle.velocityX = -5;
   ObstacleGroup.add(obstacle);
 }
  }
