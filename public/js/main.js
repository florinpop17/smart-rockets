var population;
var lifespan = 200; // User in DNA.js
var count = 0; // Used also in rocket.js
var lifeP;

function setup() {
    createCanvas(600, 600);
    lifeP = createP();
    population = new Population();
}

function draw() {
    background(51);
    lifeP.html('Count: '+count);
    count++;

    population.updateRockets();
}
