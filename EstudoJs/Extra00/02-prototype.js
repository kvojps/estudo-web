function Lampada(potencia = 100, cor = "branca", ligada = true) {
    this.potencia = potencia;
    this.cor = cor;
    this.ligada = ligada;
    this.ligarDesligar = function() {
        console.log("Chamou a função");
    }
}

const lampada = new Lampada();
console.log("Mostrando estrutura do objeto lampada com prototype")
console.log(lampada);
