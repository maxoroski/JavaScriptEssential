let price1;
let price2;
let catfood;

function calculateArea() {
    catfood = parseFloat(document.getElementById('catfood').value);
    price1 = parseFloat(document.getElementById('price1').value);
    price2 = parseFloat(document.getElementById('price2').value);
   
    let total = catfood + price1 + price2;
    document.getElementById('result').innerText = `The total cost of Groceries is: ${total}`;
}