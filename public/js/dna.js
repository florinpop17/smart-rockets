class DNA{
    constructor(){
        this.genes = [];
        for(var i=0; i<lifespan; i++){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.5);
        }
    }

    crossover(partner) {
        var newDNA = [];
        var mid = flood(random(genes.length));
        genes.forEach((gene, idx) => {
            if(idx > mid){
                newDNA[idx] = this.genes[idx];
            } else {
                newDNA[idx] = this.partner[idx];
            }
        });

        return newDNA;
    }
}
