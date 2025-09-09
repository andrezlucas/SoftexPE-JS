import { Pessoas } from "./pessoal";

export class pessoaJuridica extends Pessoas{

public cnpj: Number;

constructor(cnpj,nome,endereco, peso, idade){
    super(nome,endereco, peso, idade)
    this.cnpj= cnpj

}

}