function redirectsToLogin(){
    window.location.href = "../html/login.html";
}

function redirectsToCadastro(){
    window.location.href = "../html/cadastro.html";
}

function showExampleItem(){
   
    var imageItem;
    var nameItem;
    var priceItem;

    imageItem = document.getElementsByClassName("image-item-box");
    nameItem = document.getElementsByClassName("name-item-box");
    priceItem = document.getElementsByClassName("price-item-box");

    imageItem[0].src = "../images/imagem_item_exemplo.png";
    nameItem[0].value = "Cafeteira Oster vermelha 10 litros";
    priceItem[0].value = "R$ 221,90"
}