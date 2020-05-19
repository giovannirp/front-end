function limpar() {
    document.getElementById("senha").value = '';
}

function verificar() {
    var senha = document.getElementById("senha").value;

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 (seis) caracteres.");
    } else {
         alert("Senha Correta!");
         limpar();
    }
 }