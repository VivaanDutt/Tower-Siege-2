class Slingshot {
    constructor(bodyA, pointB) {
        var options = {bodyA: bodyA, pointB: pointB, stiffness: 0.4, length: 5};
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }
    display() {
        if (this.sling.bodyA) {
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            stroke("brown");
            line(posA.x, posA.y, posB.x, posB.y);

        }
    }

    fly() {
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}  