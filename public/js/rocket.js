class Rocket{
    constructor(dna) {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.completed = false;
        this.crashed = false;
        this.timeToAchieve = 0;

        if(dna){
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }
    }

    update() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y); // target in main.js
        if(d < 20){
            this.completed = true;
            this.timeToAchieve = 1 / count;
        }

        this.applyForce(this.dna.genes[count]);

        this.haveCrashed();

        if(!this.completed && !this.crashed) {
            this.pos.add(this.vel);
            this.vel.add(this.acc);
            this.acc.mult(0);
        }
    }

    calcFitness() {
        var d = dist(this.pos.x, this.pos.y, target.x, target.y); // target in main.js

        this.fitness = 1 / (d / 2)

        if(this.completed){
            this.fitness *= 10;

            this.fitness *= this.timeToAchieve;

            console.log('Count: ',this.timeToAchieve);
        }

        if(this.crashed){
            this.fitness /= 10;
        }
    }

    haveCrashed() {

        // Object crash
        if(this.pos.x > obstacle.x && this.pos.x < obstacle.x + obstacle.w && this.pos.y > obstacle.y && this.pos.y < obstacle.y + obstacle.h){
            this.crashed = true;
        }

        // Screen crash
        if(this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height){
            this.crashed = true;
        }
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
