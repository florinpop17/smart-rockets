class Rocket{
    constructor() {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = new DNA();
    }

    update() {
        this.applyForce(this.dna.genes[count]);

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
        fill(255, 150);
        rect(0, 0, 50, 10);
        pop();
    }
}
