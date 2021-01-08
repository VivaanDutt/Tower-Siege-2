const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, base;
var polygon, polygonImage;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup() {
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 780, 1200, 40);
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);
    base = new Ground(390, 240, 175, 20);

    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);

    slingshot = new Slingshot(this.polygon, {x:100, y:200});

    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);

    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);

    block9 = new Block(390, 155, 30, 40);
}

function draw() {
    Engine.update(engine);

    ground.display();
    base.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
}

function reload () {
    if(keyCode === 32) {
        sling.attach(bodyA);
    }
}