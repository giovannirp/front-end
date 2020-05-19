function validaForm() {
    var name = document.forms["meuForm"]['name'].value;
    var telefone = document.forms["meuForm"]['telefone'].value;

    if (name == "") {
        alert("Preencher o nome");
        return false;
    } else if (telefone == "") {
        alert("Preencher o Telefone");
        return false;
    }
}