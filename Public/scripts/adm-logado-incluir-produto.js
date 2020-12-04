function areValidAddProductData(){
    var productName = document.getElementById("productname").value;
    var price = document.getElementById("price").value;

    if (!isValidProductName(productName)){
        alert("Ops! O nome é inválido. Ele deve ter pelo menos 3 caracteres.");
        return false;
    }
    if (!isValidPrice(price)){
        alert("Ops! Você não atribui um preço ao produto.");
        return false;
    }
  
    return true;
}
function isValidProductName(name){
    return name.length >= 3;
}
function isValidPrice(price){
    return price.length > 0;
}