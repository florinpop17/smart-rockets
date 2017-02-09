class Rocket{
    constructor() {
        this.pos = createVector();
        this.vel = createVector();
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
        rect(this.pos.x, this.pos.y, 50, 10);
        pop();
    }
}
