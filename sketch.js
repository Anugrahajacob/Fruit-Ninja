var fruit, fruit1 , fruit2 , fruit3, fruit4 ;
var alien , alienImage ;
var knife , knifeImage ;
var play ;
var end;
var gameState = "play" ;
var score=0 ;
var gameOver ,gameOverImage ;
var gameoverSound , knifeSwoosh

function preload(){
  
  fruit1= loadImage("fruit1.png");
 fruit2= loadImage("fruit2.png");
  fruit3= loadImage("fruit3.png");
  fruit4= loadImage("fruit4.png");
  knifeImage= loadImage("sword.png");
   alienImage = loadAnimation("alien1.png","alien2.png")     
  gameOverImage=loadImage("gameover.png");
  gameoverSound=loadSound("gameover.mp3")
 knifeSwoosh=loadSound("knifeSwooshSound.mp3")
}

function setup(){
  createCanvas(600,600)
  knife= createSprite(300,300);

  
  fruitGroup= new Group();
  alienGroup= new Group();
}




function draw(){
background("lightblue");
  
  if(gameState==="play"){
      knife.addImage(knifeImage);
      knife.x = World.mouseX;
  knife.y = World.mouseY;
    fruits();
   Enemy();
     
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+1;
    knifeSwoosh.play();
    
  }
  
  else {
    if(alienGroup.isTouching(knife)){
    gameState="end";
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
        alienGroup.setVelocityXEach(0);
      gameoverSound.play();
  }
    }
  }
   else {
    knife.addImage(gameOverImage);
    knife.x=300;
    knife.y=300;
  }
  drawSprites(); 
  
  text(score,500,100);
  
  
  
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r===1){
      fruit.addImage(fruit1);
    } else if (r===2){
      fruit.addImage(fruit2);
    } else if (r===3){
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
      fruit.y=Math.round(random(50,340));
    
   fruit.velocityX=-7;
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
    
    
  }

     
}

 function Enemy(){
   if(World.frameCount%200===0){
     alien=createSprite(400,200,20,20);
     alien.addAnimation("moving",alienImage);
     alien.y=Math.round(random(100,300));
     alien.velocityX=-(8+score/10);
     alien.setLifetime=50;
     alienGroup.add(alien);
     
   }
 }





