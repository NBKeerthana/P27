const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(600,200,120,20);
	bob1 = new Bob(600,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');

  roof1.display();
  bob1.display();


  drawSprites();
 
}



