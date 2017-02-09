var population;

function setup() {
    createCanvas(600, 900);

    population = new Population();
}

function draw() {
    background(51);

    population.updateRockets();
}
