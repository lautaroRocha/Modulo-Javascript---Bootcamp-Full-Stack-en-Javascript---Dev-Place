// .Crea las siguientes clases (cada una en su archivo):  Rueda: con métodos para inflar la rueda y desinflarla. 

class Rueda{
    constructor(rodado = "14", aire = false){
        this.rodado = rodado;
        this.aire = aire;
    }
    
    inflarRueda(){
            this.aire = true;
    }
}

let rueda = new Rueda;
rueda.inflarRueda();
console.log(rueda)