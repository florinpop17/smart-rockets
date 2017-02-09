var population;
var lifespan = 200; // User in DNA.js
var count = 0; // Used also in rocket.js
var lifeP;
var rockReachP;

var target;
var targetSize = 30;

var rocketsReacedTarget = 0;

function setup() {
    createCanvas(600, 600);

    lifeP = createP();
    rockReachP = createP();
    population = new Population();

    target = createVector(width/2, 50);
}

function draw() {
    background(51);
    lifeP.html('Count: '+count);
    count++;

    if(count == lifespan){

        // Calculate how many rockets reached the target
        rocketsReacedTarget = population.calculateHowManyReached();
        rockReachP.html('Rockets reached: '+rocketsReacedTarget);


        population.evaluate();
        population.selection();
        count = 0;
    }

    fill(255, 0, 255);
    ellipse(target.x, target.y, targetSize, targetSize);


    population.updateRockets();
}
