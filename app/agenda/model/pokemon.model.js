// Classe de Pokemon

export default class Pokemon {

  //Construtor da classe
  constructor(name, type){
    this.name = name
    this.type = type
  }
  //Inseri um nome para o Pokemon
  setName(name){
    this.name = name
  }
//Retorna o nome do Pokemon
  getName(){
    return this.name;
  }
//Retornar o tipo de Pokemon
  getType(){
    return this.type
  }





}
