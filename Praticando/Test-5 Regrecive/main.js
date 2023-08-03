//initialising a variable name data
var ano = 2023;
var nasc = 2001
var idade = "";
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = idade;
//creation of increment function
function increment() {
    idade = idade + 1;
    document.getElementById("counting").innerText = idade;
}
//creation of decrement function
function decrement() {
    idade = ano - nasc;
    document.getElementById("counting").innerText = idade;
}