
// declaring var 

var ground, helicopterImage, helicopterSprite, packageSprite,packageImage;

var zombieSprite1;
var zombieImage1;
var zombieSprite2;
var zombieImage2;
var packageBody; 

// declaring constant engine world bodies 
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{

	// loading images
helicopterIMG=loadImage("helicopter.png");

zombieImage1 = loadImage("zombie right.png");

zombieImage2 = loadImage("Zombie left.png");

packageIMG=loadImage("package.png");

}


function setup() {
	// creating the canvas 
createCanvas(800, 700);


// rectMode(CENTER);


// creating ground 
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(44,235,6);

// creating the package
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2


// creating helicopter
helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6


// creatig zombie
zombieSprite1=createSprite(600,height-107,10,10);
zombieSprite1.addImage(zombieImage1)
zombieSprite1.scale=0.2;


// creating zombie
zombieSprite2=createSprite(200,height-107,10,10);
zombieSprite2.addImage(zombieImage2)
zombieSprite2.scale=0.11;


// creating engine
engine = Engine.create();

world = engine.world;

// creates grond for the package
ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
World.add(world, ground);

// creating package and bouncing it
packageBody = Bodies.circle(width/2 , 200 , 23 , {restitution: 0.4, isStatic:true});
World.add(world, packageBody);


// running the engine 
Engine.run(engine);

}


function draw() {  

// backgrond color	
background("black");

// creating the package behnd the chopper 
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

// text
fill("cyan");
textSize(25);
text("Pess CTRL + R TO Reset!",width/2,100);


// draws all sprites 
drawSprites(); 

}

function keyPressed() {

	// the down arrw key pressed package falls 
if (keyCode === DOWN_ARROW) {


Body.setStatic(packageBody, false);


}

}

