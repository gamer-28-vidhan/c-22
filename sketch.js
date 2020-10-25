const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var obj;
var ball




function setup() {
  createCanvas(400,400)

  engine = Engine.create();
  world = engine.world

var a = {
  isStatic: true
}

obj = Bodies.rectangle(200,390,400,40, a)
World.add(world,obj)
console.log(obj.position.x)

var b = {
restitution:2

}

ball = Bodies.circle(200,80,20, b)
World.add(world,ball)


}

function draw() {
  background("pink") 
Engine.update(engine)

  rectMode(CENTER)
  rect (obj.position.x,obj.position.y,400,40)

  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,20,20)
  
  
}