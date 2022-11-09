const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;

let engine;
let world;

var tower;
var canvas;
var cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(0, height-1, width*2, 1);

 tower = new Tower(150, 350, 160, 310);

 angle = -PI/4;

 cannon = new Cannon(180,110, 100, 50 ,angle);

 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);
  tower.display();
  ground.display();
  cannon.display();
  Engine.update(engine);
//muestra la torre(desafío 4)

}
