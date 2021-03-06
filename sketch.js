var ground, box1, box2, box3, ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 680, 800, 100);
	box1 = new Box(600, 630, 200, 30);
	box2 = new Box(500, 570, 30, 150);
	box3 = new Box(700, 570, 30, 150);
	ball = new Paper(100, 630, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x: 20, y: -30})
	}
}


