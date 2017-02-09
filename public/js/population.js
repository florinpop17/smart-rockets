class Population{
    constructor(){
        this.rockets = [];
        this.matingPool = [];
        this.popSize = 50;

        for(var i=0; i<this.popSize; i++){
            this.rockets.push(new Rocket());
        }
    }

    evaluate() {

        var maxFitness = 0;
        this.rockets.forEach(rocket => {
            rocket.calcFitness();
            if(rocket.fitness > maxFitness){
                maxFitness = rocket.fitness;
            }
        });

        this.rockets.forEach(rocket => {
            rocket.fitness /= maxFitness;
        });

        this.matingPool = [];

    }

    updateRockets(){
        this.rockets.forEach(rocket => {
            rocket.update();
            rocket.show();
        });
    }
}
