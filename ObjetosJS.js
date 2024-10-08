// JSON classes
//let pessoas = [{ idade: 25, nome: "Ana" }, {idade: 43, nome: "Carlos" }];


//Classes Function , sintaxe antiga
function Pessoa(nome, idade){
    this.nome = nome; this.idade = idade;
}

let pessoas = [new Pessoa("Ana", 25), new Pessoa("Carlos", 43)] // new gera o objeto

class Pessoa{
    constructor(nome, idade){this.nome = nome; this.idade = idade;}
    exibir = () => alert(`${this.nome} :: ${this.idade}`); // função ou método sendo acionada
} // sintaxe nova

