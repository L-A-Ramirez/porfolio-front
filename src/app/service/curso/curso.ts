export class Curso {
    id!:number;
    nombre!:string;
    carga_horaria!:string;
    centro!:string;
    dni_persona!:number;

    constructor( nombre:string, carga_horaria:string, centro:string){
        this.nombre = nombre;
        this.carga_horaria = carga_horaria;
        this.centro = centro;
    }
}
