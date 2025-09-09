import { Pessoas } from "./pessoal";

export class pessoaFisica extends Pessoas{

public cpf: Number;

constructor(cpf,nome,endereco, peso, idade){
    super(nome,endereco, peso, idade)
    this.cpf= cpf


}







    
}