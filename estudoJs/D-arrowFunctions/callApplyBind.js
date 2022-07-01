//--call--
const article = {
    title : 'Descomplicando call, apply e bind',
    language : 'JavaScript'
}

function print() {
    console.log(`${this.title} em ${this.language}.`)
}

/* Como a função print e o objeto article não possuem nenhuma
ligação, print vai imprimir undefined */
print()

/* o call é utilizado para especificar o contexto do this do
objeto article na função*/
print.call(article)

//--apply--
function sumNumbers(firstNumber, secondNumber) {
    const sum = this + firstNumber + secondNumber
    console.log(sum)
}

/* O apply funciona exatamente como o método call, porém seu
segundo parâmetro recebe um array dos parâmetros da função,
enquanto o primeiro parâmetro continua recebendo o valor que será
atribuído ao this */

sumNumbers.apply(5, [2,7])

//--bind--
function sumNumbers2(fstNumber, sndNumber = 0) {
    const sum = this + fstNumber + sndNumber
    console.log(sum)
}

//bind retorna uma nova função, aqui definimos o valor do this para 5.
const bindResultFunction = sumNumbers2.bind(5)

/*Com a função retornada na variável abaixo é atribuido o 5 como fstNumber,
já o sndNumber é referente ao valor 0 colocado por padrão na declaração da func*/
bindResultFunction(5)


