export class Colaborador {
    id!: number;
    nomeCompleto!: string;
    idade!: string;
    sexo!: string;
    cidade!: string;
    salario!: number;
    cargo!: string;
    cargoConfianca!: boolean;

    constructor(id: number, nomeCompleto: string){
        this.id = id;
        this.nomeCompleto = nomeCompleto;
    }
}
