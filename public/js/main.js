var population;
var lifespan = 200; // User in DNA.js
var count = 0; // Used also in rocket.js
var lifeP;

var target;

function setup() {
    createCanvas(600, 600);

    lifeP = createP();
    population = new Population();

    target = createVector(width/2, 50);
}

function draw() {
    background(51);
    lifeP.html('Count: '+count);
    count++;

    if(count == lifespan){
        population = new Population();
        count = 0;
    }

    fill(255, 0, 255);
    ellipse(target.x, target.y, 16, 16);

    population.updateRockets();
}
