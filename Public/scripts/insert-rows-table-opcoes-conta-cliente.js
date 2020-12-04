function insertRowExample(){
    var table = document.getElementById("table-my-purchases");
    var totalRows = table.rows.length;
    
    var row = table.insertRow(totalRows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "Cafeteira Oster Vermelha 10 litros";
    cell2.innerHTML = "1";
    cell3.innerHTML = "03/12/2020";
}