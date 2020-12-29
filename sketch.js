const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330,70,70);
    box2 = new Box(920,330,70,70);
    pig1 = new Pig(810,380);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

     box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
   log5 = new Log(870,120,150, -PI/7);

   bird = new Bird(100,100);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig3.display();

    ground.display();

    log1.display();
    log3.display();
    log4.display();
    log5.display();

    bird.display();


}