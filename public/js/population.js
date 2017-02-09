class Population{
    constructor(){
        this.rockets = [];
        this.popSize = 50;

        for(var i=0; i<this.popSize; i++){
            this.rockets.push(new Rocket());
        }
    }

    evaluate() {
        this.rockets.forEach(rocket => {
            rocket.calcFitness();
        });
    }

    updateRockets(){
        this.rockets.forEach(rocket => {
            rocket.update();
            rocket.show();
        });
    }
}
