var rocket;

function setup() {
    createCanvas(800, 800);

    rocket = new Rocket();
}

function draw() {
    background(51);

    rocket.update();
    rocket.show();
}
