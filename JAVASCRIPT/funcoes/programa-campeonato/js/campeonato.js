var pularLinha = function() {
    document.write("<br>");
}

var mostra = function(frase) {
    document.write(frase);
    pularLinha();
}

var vitorias = prompt("Quantos jogos o W3C Futebol Clube venceu?");
var empates = prompt("Quantos jogos o W3C Futebol Clube empatou?");

//calculo
var pontos = (vitorias * 3) + parseInt(empates);

if(pontos >= 9) {
    mostra("Nosso time está indo MELHOR que o WRI!");
    mostra("Os ponto do time é: " + pontos);
}

if(pontos == 8) {
    mostra("Nosso time está EMPATADO com o Outros!");
    mostra("Os ponto do time é: " + pontos);
}

if(pontos <= 7) {
    mostra("Nosso time está indo PIOR que o Outros!");
    mostra("Os ponto do time é: " + pontos);
}

