function redirectsToChangeRegistrationPage(){
    window.location.href = "../html/opcao-conta-cliente-alterar-cadastro.html";
}

function accountDelete(){
    var result = confirm("Deseja realmente excluir sua conta? Caso confirme, não será possível recuperar seus dados.")
    if (!result)
        return;
    
    //TODO: excluir conta do cliente
}