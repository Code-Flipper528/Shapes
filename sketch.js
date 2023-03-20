
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var building;
var ball;
var poly;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {isStatic:true}
  ground = Bodies.rectangle(0, 370, 400, 10, options)
  World.add(world, ground)

  building = Bodies.rectangle(250, 170, 70, 200, options)
  World.add(world, building)

var ballOptions = {restitution: 0.9}
  ball = Bodies.circle(50, 20, 20, ballOptions)
  World.add(world, ball)

  poly = Bodies.polygon(80, 20, 8, 50)
  World.add(world, poly)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect (ground.position.x, ground.position.y, 400, 10)
  rect (building.position.x, building.position.y, 50, 200)

  ellipse (ball.position.x, ball.position.y, 30, 30)

  polygon (poly.position.x, poly.position.y, 8, 100)
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
