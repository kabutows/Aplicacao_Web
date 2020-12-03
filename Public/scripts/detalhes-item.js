//TODO: fazer codigo para clique no icone de perfil
//TODO: fazer codigo para clique no icone de sair

function increaseQuantity(){
    var iptAmountItem = document.getElementById("amount-item");
    var quantity = parseInt(iptAmountItem.value);
    quantity++;
    iptAmountItem.value = String(quantity);
}
function decreaseQuantity(){
    var iptAmountItem = document.getElementById("amount-item");
    var quantity = parseInt(iptAmountItem.value);
    if(quantity > 1){
        quantity--;
        iptAmountItem.value = String(quantity);
    }
}
