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

        this.matingPool = [];

        this.rockets.forEach(rocket => {
            rocket.fitness /= maxFitness;
            var n = rocket.fitness * 100;

            for(var i=0; i<n; i++){
                this.matingPool.push(rocket);
            }
        });

    }

    selection() {
        var newRockets = [];
        this.rockets.forEach(rocket => {
            var parentA = random(this.matingPool).dna;
            var parentB = random(this.matingPool).dna;

            var child = parentA.crossover(parentB);
            newRockets.push(new Rocket(child));
        });
    }

    updateRockets(){
        this.rockets.forEach(rocket => {
            rocket.update();
            rocket.show();
        });
    }
}
