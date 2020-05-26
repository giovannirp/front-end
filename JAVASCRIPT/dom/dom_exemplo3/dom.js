function incluir() {
    var texto = document.meuForm.texto.value;
    var lista = document.getElementById("minhaLista");
    var novoItem = document.createElement("li");
    var novoTexto = document.createTextNode(texto);
    lista.appendChild(novoItem);
    novoItem.appendChild(novoTexto);
    limpar();
}

function limpar() {
    var texto = document.getElementById("texto");
    texto.value = "";
}