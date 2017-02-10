class Population{
    constructor(popSize){
        this.rockets = [];
        this.matingPool = [];
        this.popSize = popSize;
        this.populationCount = 0;

        for(var i=0; i<this.popSize; i++){
            this.rockets.push(new Rocket());
        }
    }

    calculateHowManyReached() {
        var x = 0;

        this.rockets.forEach(rocket => {
            if(rocket.completed){
                x++;
            }
        });
        return x;
    }

    calculateHowManyCrashed() {
        var x = 0;

        this.rockets.forEach(rocket => {
            if(rocket.crashed){
                x++;
            }
        });
        return x;
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
            child.mutation();

            newRockets.push(new Rocket(child));
        });

        this.rockets = newRockets;
    }

    updateRockets(drawing){
        this.rockets.forEach(rocket => {
            rocket.update();

            // Remove this to draw or set to true in main.js
            if(drawing)
                rocket.show();
        });
    }

    fastest() {
        var fastestTime = 0;
        this.rockets.forEach(rocket => {
            if(rocket.timeToArrive > fastestTime){
                fastestTime = rocket.timeToArrive;
            }
        })

        return fastestTime;
        console.log('Fastest arrived in: ', fastestTime);
        console.log('-----------');
    }
}
