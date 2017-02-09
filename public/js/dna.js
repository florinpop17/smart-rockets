class DNA{
    constructor(){
        this.genes = [];
        this.lifespan = 200;
        for(var i=0; i<this.lifespan; i++){
            this.genes[i] = p5.Vector.random2D();
        }
    }
}
