class Rocket{
    constructor(dna) {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        if(dna){
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }
    }

    update() {
        this.applyForce(this.dna.genes[count]);

        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    calcFitness() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y); // target in main.js

        this.fitness = map(d, 0, width, width, 0);
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
