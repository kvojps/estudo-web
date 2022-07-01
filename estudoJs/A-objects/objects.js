//Criando o objeto pessoa usando object literal
const pessoa = {
    nome : "José",
    idade : 19,
    curso : "Engenharia de SW",
    montarCurriculo() {
        console.log(`${this.nome} cursa ${this.curso}`)
    }
}

//Novo objeto criado com spread
const pessoa2 = {...pessoa}

//Novo objeto criado com shorthand
const nome = "Zé", idade = 72, curso = "Vida", montarCurriculo = function() {console.log(`${this.curso}`)}
const pessoa3 = {nome, idade, curso, montarCurriculo}

//Adicionando elemento ao objeto de forma dinâmica
pessoa.sexo = "Masculino"

//Removendo elemento do objeto
delete pessoa.sexo

//Criando objeto utilizando factory
function criaPessoa(nome = "José", idade = 19, curso = "ES") {
    return {
        nome,
        idade,
        curso,
        montarCurriculo: function() {
            console.log(`${this.curso}`)
        }
    }
}

//Criando objeto utlizando prototype
function PessoaPrototype(nome = "José", idade = 19, curso = "ES") {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.montarCurriculo = function() {
        console.log(`${this.curso}`)
    }
}
const pessoa4 = new PessoaPrototype();

//Criando objetos usando classes
class PessoaClass {
    constructor(nome = "José", idade = 19, curso = "ES") {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    montarCurriculo() {
        console.log("Bazinga")
    }
}

const pessoa5 = new PessoaClass()




