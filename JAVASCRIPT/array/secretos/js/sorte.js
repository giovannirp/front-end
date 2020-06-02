var segredos = [16, 34, 37, 42, 50, 58];

var botaoClicado = function() {
    var caixaDoNumero = document.getElementById("numero").value;

    for(var i = 0; i < segredos.length; i = i + 1) {
        if(segredos[i] == caixaDoNumero) {
            alert("Parabéns! Você acertou");
            return false;
        }
    }
    alert("Infelizmente você errou");
}

var botaoAdivinhar = document.getElementById("adivinhar");
botaoAdivinhar.onclick = botaoClicado;