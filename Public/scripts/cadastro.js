//TODO: verificar se nome de usuário já não existe no BD (back-end)
function areValidData(){
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