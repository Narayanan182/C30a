const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bunnyImg
var fruitImg
var bgImg
var bunny
var button               

function preload()
{
  bgImg=loadImage("background.png")
  bunnyImg=loadImage("Rabbit-01.png")
  fruitImg=loadImage("melon.png")
  
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  bunny = createSprite(250,650,100,100)
  bunny.addImage(bunnyImg)
  bunny.scale=0.2
  button = createImage("cut_button.png")
  button.position(220,30)
  button.size(50,50)
  button.mouseClick(drop)
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER)                                                                                                                                                                                                                                                                                                                                                     
}

function draw() 
{
  background(51);
  image(bgImg,width/2,height/2,500,700)       
  rope.show();
  image(fruitImg,fruit.position.x,fruit.position.y,80,80);
  ground.show();
  Engine.update(engine);
  drawSprites()
}

function drop()
{
  rope.break()
  fruit.detach()
  fruit=null

}
