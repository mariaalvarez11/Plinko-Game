const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gGround;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
    gGround = new Ground(240,790,1200,10);
    
    //divisions
    for (var k = 0; k<=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
    }
    //plinkos
    for (var j = 75; j<=width; j = j + 50) {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j<=width-10; j = j + 50) {
      plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j<=width; j = j + 50) {
      plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j<=width-10; j = j + 50) {
      plinkos.push(new Plinko(j,375));
    }

}

function draw() {
  background("pink");
  Engine.update(engine);
  gGround.display();  

   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
   
  for (var j = 0; j<plinkos.length; j++) {
    plinkos[j].display();
  }

  if(frameCount%10===0){
    particles.push(new Particle(random(50, 750), 10,10));
  }
  for (var i = 0; i<particles.length; i++) {
    particles[i].display();
  }
  drawSprites();
}