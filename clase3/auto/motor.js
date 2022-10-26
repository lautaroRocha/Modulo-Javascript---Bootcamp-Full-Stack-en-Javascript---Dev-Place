// .Crea las siguientes clases (cada una en su archivo): Motor: con métodos para arrancar el motor y apagarlo. 

class Motor{
    motorEnMarcha = false;

    encenderMotor(){
        if(!this.motorEnMarcha){
            this.motorEnMarcha = true;
        }else{
            return 'el motor ya está encendido'
        }
    }
    detenerMotor(){
        if(this.motorEnMarcha){
            this.motorEnMarcha = false;
        }else{
            return 'el motor ya está apagado'
        }
    }

    
}