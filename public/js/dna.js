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
        var mid = floor(random(this.genes.length));
        this.genes.forEach((gene, idx) => {
            if(idx > mid){
                newGenes[idx] = gene;
            } else {
                newGenes[idx] = partner.genes[idx];
            }
        });
        return new DNA(newGenes);
    }

    mutation(mutationLevel) {
        this.genes = this.genes.map((gene,idx) => {
            if(random(1) < mutationLevel){
                gene = p5.Vector.random2D();
                gene.setMag(0.5);
            }
            return gene;
        });
    }
}
