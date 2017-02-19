var population;
var lifespan = 300; // User in DNA.js
var populationSize = 100; // Used in population.js
var count = 0; // Used also in rocket.js
var rockCrashP;
var rockReachP;
var fastestTimeP;
var populationP;

var target;
var targetSize = 30;

var rocketsReacedTarget = 0;
var rocketsCrashed = 0;

var obstacles = [];

function setup() {
    createCanvas(600, 600);

    rockCrashP = createP().html('Rockets crashed: 0');
    rockReachP = createP().html('Rockets reached the target: 0');
    fastestTimeP = createP().html('Fastest rocket arrived in: 0');
    populationP = createP().html('Population #0');

    population = new Population(populationSize);

    target = createVector(width/2, 50);
}

function draw() {
    background(51);
    count++;

    if(count == lifespan){

        population.evaluate();

        // Get the fastest rocket
        fastestTimeP.html('Fastest rocket arrived in: '+population.fastest() || 0);

        // Get the number of the population
        populationP.html('Population #'+ (++population.populationCount));

        // Calculate how many rockets reached the target
        rocketsReacedTarget = population.calculateHowManyReached();
        rockReachP.html('Rockets reached the target: '+rocketsReacedTarget);

        // Calculate how many rockets crashed
        rocketsCrashed = population.calculateHowManyCrashed();
        rockCrashP.html('Rockets crashed: '+rocketsCrashed);

        population.selection();
        count = 0;
    }

    fill(255, 0, 255);
    ellipse(target.x, target.y, targetSize, targetSize);

    population.updateRockets(); // remove drawing to draw always

    if(obstacles.length > 0){
        obstacles.forEach(obstacle =>{
            obstacle.show();
        });
    }
}

function mouseClicked() {
    fill(200);
    stroke(0);
    obstacles.push(new Obstacle(mouseX - 15, mouseY - 15, 30, 30));
}

function touchStarted() {
    fill(200);
    stroke(0);
    obstacles.push(new Obstacle(mouseX - 15, mouseY - 15, 30, 30));
    
    return false;
}
