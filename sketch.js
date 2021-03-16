const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//things to do
  // make the backgrounf api time thing
  // make the good and bad clovers spawn randomly
  // make the leprochaun a slingshot and catch the good clover
  // make a trajectory
  // when the lep touches a good clover it vanishes and if it touches a bad clover the game stops
  


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
 

  slingShot = new Slingshot(this.leprochaun,{x:100,y:200});
  leprochaun= new Leprochaun(200,200)
  gclover1= new Block (550,350,50,50)
  gclover2= new Block (500,350,50,50)
  gclover3=new Block (600,350,50,50)
  gclover4=new Block (450,350,50,50)
  gclover5=new Block (400,350,50,50)

  bclover1= new Block (650,350,50,50)
  bclover2= new Block (650,350,50,50)
  bclover3=new Block (700,350,50,50)
  bclover4=new Block (750,350,50,50)
  bclover5=new Block (800,350,50,50)


}
function draw() {
  background(56,44,44); 
 
  Engine.update(engine);
 

  ground.display();


  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.leprochaun)
  }
}