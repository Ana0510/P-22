const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4, ball5, ball_options;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    ball_options = 
	{
	 restitution: 0.8
	};
     
	ball1 = Bodies.circle(300, 300, 35, ball_options);
	World.add(world, ball1);

	ball2 = Bodies.circle(350, 300, 35, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(400, 300, 35, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(450, 300, 35, ball_options);
	World.add(world, ball4);

	ball5 = Bodies.circle(500, 300, 35, ball_options);
	World.add(world, ball5);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  push();
  ellipse(ball1.position.x, ball1.position.y,35);
  ellipse(ball2.position.x, ball2.position.y,35);
  ellipse(ball3.position.x, ball3.position.y,35);
  ellipse(ball4.position.x, ball4.position.y,35);
  ellipse(ball5.position.x, ball5.position.y,35);
  pop();
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
