
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var leftSide
var groundObj
var ball_options;
var ground
function preload(){
	
}

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	// ground =new Ground(200,390,400,20);
	// groundObj =new ground(width/2670,width,20);
	//  leftSide = new Ground(110,600,20,120);


	Engine.run(engine);
  
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  Matter.Bodies.circle(200,100,20,ball_options);

//   groundObj.show()
//   leftSide.show()	
//   ground.shox


  Engine.update(engine);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

	}

  }

