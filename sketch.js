const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

  

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var playerArrows = [];

var numberOfArrows = 10;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, 500, 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );


}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  playerBase.display();
  player.display();
  playerArcher.display();

  

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);

  // Conteo de flechas
  
  
  
}

