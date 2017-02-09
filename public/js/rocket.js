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
}
