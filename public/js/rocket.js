class Rocket{
    constructor() {
        this.pos = createVector(width/2, height);
        this.vel = p5.Vector.random();
        this.acc = createVector();
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 50, 10);
        pop();
    }
}
