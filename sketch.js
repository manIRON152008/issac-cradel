
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	bob = new Bob(165,100,20);
	bob2 = new Bob(205,100,20);
	bob3 = new Bob(245,100,20);
	bob4 = new Bob(285,100,20);
	bob5 = new Bob(325,100,20);
	roof = new Roof(320,20,300,20)
    rope = new Rope(bob.body,roof.body,-80,0)
	rope2 = new Rope(bob2.body,roof.body,-40,0)
    rope3 = new Rope(bob3.body,roof.body,0,0)
    rope4 = new Rope(bob4.body,roof.body,40,0)
	rope5 = new Rope(bob5.body,roof.body,80,0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("green");
  
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body , bob5.body.position,{
			x:12,y:0
		})
	}
}




