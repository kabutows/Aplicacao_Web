//TODO: verificar se nome de usuário existe (back-end)
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

function areValidEditUserData(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (!isValidUserName(userName)){
        alert("Ops! O nome é inválido. Ele deve ter pelo menos 3 caracteres.");
        return false;
    }
    if (!isValidPassword(password)){
        alert("Ops! A senha é inválida. Ela deve ter pelo menos 7 caracteres.");
        return false;
    }
    if (!isValidConfirPassword(password, confirmPassword)){
        alert("Ops! As senhas não são iguais.");
        return false;
    }
    return true;
}
function isValidUserName(name){
    return name.length >= 3;
}
function isValidPassword(password){
    return password.length >= 7;
}
function isValidConfirPassword(password, confirmPassword){
    return password == confirmPassword;
}