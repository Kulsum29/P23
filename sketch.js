var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, rSide1,rSide2,rBottom
var rSprite1,rSprite2,rSpriteBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.17

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 22 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	rSide1=Bodies.rectangle(width/2-110,610,20,100)
	World.add(world,rSide1)
	rSprite1=createSprite(width/2-110,610,20,100)
	rSprite1.shapeColor="red"
	
	rSide2=Bodies.rectangle(width/2+110,610,20,100)
	World.add(world,rSide2)
	rSprite2=createSprite(width/2+110,610,20,100)
	rSprite2.shapeColor="red"

	
	rBottom=Bodies.rectangle(width/2,645,200,20)
	World.add(world,rBottom)
	rSpriteBottom=createSprite(width/2,645,200,20)
	rSpriteBottom.shapeColor="red"
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rSprite1.x=rSide1.position.x
  rSprite1.y=rSide1.position.y
  rSprite2.x=rSide2.position.x
  rSprite2.y=rSide2.position.y
  rSpriteBottom.x=rBottom.position.x
  rSpriteBottom.y=rBottom.position.y
  groundSprite.y=ground.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    Body.setStatic(packageBody,false);
  }
}



