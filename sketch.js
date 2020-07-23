
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var targetOne,targetTwo,targetThree


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,220,30);
	ground = new Ground(400,height,800,20);
	targetOne = new Trash(740,620,10,120);
	targetTwo = new Trash(540,620,10,120);
	targetThree = new Trash(640,680,210,10);
	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
 // isTouching();
  ground.display();
  paper.display();
  targetOne.display();
  targetTwo.display();
  targetThree.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-12});
	}
	}


/*function isTouching(){
	if(paper.body.position.x-targetOne.x<=paper.width/2+targetOne.width/2
	  &&targetOne.x-paper.x<=paper.width/2+targetOne.width/2
	  &&paper.y-targetOne.y<=paper.height/2+targetOne.height/2
	  &&targetOne.y-paper.y<=paper.height/2+targetOne.height/2){
  Matter.Body.setVelocity(paper.body,0);
	}
	else { 
		return false;
	   }
	}
*/
