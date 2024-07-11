export class Experiencia {
    id!:number;
    trabajo!:string;
    puesto!:string;
    cargo!:string;
    herramientas!:string;
    referencia!:string;
    dni_persona!:number;

    constructor( trabajo:string, puesto:string, cargo:string, herramientas:string, referencia:string){
        this.trabajo = trabajo;
        this.puesto = puesto;
        this.cargo = cargo;
        this.herramientas = herramientas;
        this.referencia = referencia;
    }
}