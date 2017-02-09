class DNA{
    constructor(){
        this.genes = [];
        for(var i=0; i<lifespan; i++){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.5);
        }
    }
}
