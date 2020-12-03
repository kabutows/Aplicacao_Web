//TODO: verificar se nome e senha existem no BD (back-end)
function areValidData(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (!isValidUserName(userName)){
        alert("Ops! O nome é inválido. Ele deve ter pelo menos 3 caracteres.");
        return false;
    }
    if (!isValidPassword(password)){
        alert("Ops! A senha é inválida. Ela deve ter pelo menos 7 caracteres.");
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