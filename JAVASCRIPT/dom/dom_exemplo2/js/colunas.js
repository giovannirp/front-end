function criarColuna() {
    var linha = document.getElementById("linha");
    var novaColuna = document.createElement("td");
    var novoTexto = document.createTextNode("Nova Coluna");
    novaColuna.appendChild(novoTexto);
    linha.appendChild(novaColuna);    
}