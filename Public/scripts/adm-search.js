//TODO: verificar se nome de usuário ou produto existe (back-end)
function areValidSearchData(){
    var search = document.getElementById("search").value;

    if (!isValidSearchValue(search)){
        alert("Ops! Digite o valor da sua busca.");
        return false;
    }
    
    return true;
}
function isValidSearchValue(search){
    return search != "";
}