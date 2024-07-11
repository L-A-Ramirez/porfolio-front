export class Habilidad {
    id!:number;
    nombre!:string;
    porcentaje!:number;
    foto!:string;
    dni_persona!:number; 
    tipo!:string;

    constructor( nombre:string, porcentaje:number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}