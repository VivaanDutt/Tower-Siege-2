const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, base1, base2;
var polygon, polygonImage;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function preload() {
    polygonImage = loadImage("polygon.png");
}
function setup() {
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 760, 1400, 40);
    polygon = Bodies.circle(100, 200, 20);
    World.add(world, polygon);
    console.log(polygon);
    base1 = new Ground(390, 400, 240, 20);
    // base2;

    

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
    block9.shapeColor = "blue";
}

function draw() {
    background("black");
    Engine.update(engine);

    ground.display();
    base1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    imageMode(CENTER);
    image(polygonImage, polygon.position.x, polygon.position.y, 40, 40);
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}

function mouseDragged() {
     Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}