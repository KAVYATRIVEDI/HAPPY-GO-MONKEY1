var monkeyImage,monkey,jungle,bananaImage,
stoneImage,jungleImage,ground;

var StoneGroup,BannanGroup;

var PLAY =1;
var END = 0;
var gameState= PLAY ;



function preload (){
  
 monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
jungleImage=loadImage("jungle.jpg");
  
bananaImage =loadImage("banana.png");
  
stoneImage = loadImage ("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
monkey = createSprite(80,370,15,15);
monkey.addAnimation( "running",monkeyImage);
monkey.scale=0.2;
  
 stroke("black");
textSize(20);
fill("black");
  
  survivaltime = 0;
  BananaGroup = new Group();
  StoneGroup = new Group();
  
  ground = createSprite(200,380,400,20);
ground.x=ground.width/2;
ground.visible=false;
  
}

function draw() {
  background(220);
  
  if(gameState === PLAY ){
   
  monkey.velocityY = monkey.velocityY + 0.8; 
 monkey.collide(ground);



  text("Survival  Time : "+ survivaltime, 200, 100);
  
  spawnbanana ();
  spawnstone ();
  
  
if(keyDown("space") && monkey.y > 200){
  monkey.velocityY=-10;
}

if(monkey.isTouching(BananaGroup)){
survivaltime = survivaltime+1;
BananaGroup.destroyEach();

}

if(monkey.isTouching(StoneGroup)){
   BananaGroup.destroyEach();
   StoneGroup.destroyEach();
  gameState = END;
}
    
    if(gameState === END){
text("Game Over", 120, 200);
text("Press R to Restart", 150,300);
monkey.velocityY=0;
if(keyDown("r")){
  gameState = PLAY;
  
}
      
 }
 
  }
  drawSprites ();
}

function spawnbanana (){
  if (frameCount % 80 === 0){
    var banana = createSprite(392,random(180,280),20,20);
   banana.velocityX= -6;
   banana.addImage (bananaImage);
    banana.scale=0.1;
  banana.lifetime=134;
    BananaGroup.add(banana); 
  }   
  }
  
function spawnstone (){
  if (frameCount % 120 === 0){
   var stone = createSprite(390,random(300,380),20,20) ;
 stone.velocityX=-6;
  stone.addImage( stoneImage);
  stone.scale=0.2;
   stone.lifetime=134;
 StoneGroup.add(stone);
 }
}