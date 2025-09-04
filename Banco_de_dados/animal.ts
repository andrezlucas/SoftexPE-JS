class Animais {
    public raca : String;
    public pelagem : String;
    public tamanho : String;
    public Expectativa_de_Vida : String;
    public  nivel_de_energia: String;
    public sociavel: boolean;

    constructor(raca, pelagem, tamanho, Expectativa_de_Vida, nivel_de_energia, sociavel){

this.raca = raca
this.pelagem = pelagem
this.tamanho = tamanho
this.Expectativa_de_Vida =  Expectativa_de_Vida
this.nivel_de_energia = nivel_de_energia
this.sociavel = sociavel



    }

comer (){ 
    console.log("comidinhaa")

}
dormir (){
    console.log("dormirzzzz")

}
emitirsom(){
    console.log("AAAAAAA")


}

reproduzir(){
    console.log("nheco")
}

respirar(){
    console.log("respiradaa")

}

locomover(){
    console.log("movimentos")

}
}


const coelho = new Animais("rex", "marrom", "10cm", "3 anos", "medio", true)


coelho.comer()
coelho.dormir()
coelho.emitirsom()
coelho.reproduzir()
coelho.respirar()
coelho.locomover()
console.log (coelho)