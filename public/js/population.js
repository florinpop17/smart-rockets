class Population{
    constructor(){
        this.rockets = [];
        this.popSize = 100;

        for(var i=0; i<this.popSize; i++){
            this.rockets.push(new Rocket());
        }
    }

    updateRockets(){
        this.rockets.forEach(rocket => {
            rocket.update();
            rocket.show();
        });
    }
}
