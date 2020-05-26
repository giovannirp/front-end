function criarColuna() {
    var linha = document.getElementById("linha");
    var novaColuna = document.createElement("td");
    var novoTexto = document.createTextNode("Nova Coluna");
    novaColuna.appendChild(novoTexto);
    linha.appendChild(novaColuna);    
}

function outraTable() {
    var table = document.getElementById("minhaTabela");
    var linha = table.insertRow(0);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    coluna1.innerHTML = "COLUNA 1";
    coluna2.innerHTML = "COLUNA 2";
}