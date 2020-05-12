function situacao() {
    var nota = document.getElementById("nota").value;

    if(nota >= 6) {
        document.getElementById("resposta").innerHTML = "Aluno aprovado";
    } else {
        document.getElementById("resposta").innerHTML = "Aluno Reprovado";
    }
}

function limpar() {
    document.getElementById("nota").value = "";
    window.location.reload();
}