class DNA{
    constructor(genes){

        if(genes){
            this.genes = genes;
        } else {
            this.genes = [];
            for(var i=0; i<lifespan; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.3);
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

    mutation() {
        this.genes.forEach(gene => {
            if(random(1) < 0.05){
                gene = p5.Vector.random2D();
                gene.setMag(0.3);
            }
        });
    }
}
