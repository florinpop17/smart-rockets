class DNA{
    constructor(genes){

        if(genes){
            this.genes = genes;
        } else {
            this.genes = [];
            for(var i=0; i<lifespan; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.5);
            }
        }
    }

    crossover(partner) {
        var newGenes = [];
        var mid = floor(random(genes.length));
        genes.forEach((gene, idx) => {
            if(idx > mid){
                newGenes[idx] = this.genes[idx];
            } else {
                newGenes[idx] = this.partner[idx];
            }
        });

        return new DNA(newGenes);
    }
}
