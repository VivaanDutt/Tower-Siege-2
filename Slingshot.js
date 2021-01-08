class Slingshot {
    constructor(bodyA, pointB) {
        var options = { bodyA: bodyA, pointB: pointB, stiffness: 0.4, length: 5 };
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }
    display() {
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

        if (this.sling.bodyA) {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push();

            stroke(48, 22, 8);
            if (posA.x < 220) {
                strokeWeight(7);
                line(posA.x - 20, posA.y, posB.x - 10, posB.y);
                line(posA.x - 20, posA.y, posB.x + 20, posB.y + 10);
                image(this.sling3, posA.x - 20, posA.y - 10, 15, 30)

            }
            else {
                strokeWeight(3);
                line(posA.x + 25, posA.y, posB.x - 10, posB.y);
                line(posA.x + 25, posA.y, posB.x + 20, posB.y + 10);
                image(this.sling3, posA.x + 20, posA.y - 10, 15, 30);
            }
            pop();
        }
    }

    fly() {
        this.sling.bodyA = null;
    }
    attach() {
        this.sling.bodyA = body;
    }
}  