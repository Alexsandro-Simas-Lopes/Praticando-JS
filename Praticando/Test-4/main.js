const btnEntrar = document.getElementById("CadastreUser");
const btnCadastro = document.getElementById("LoginUser");

const btnSelectItem = document.getElementById("CadastrarUser")
btnCadastro.addEventListener("click", function (e) {
    e.preventDefault();
    var Entrar = document.getElementById("ClickEnter")
    var Cadastrar = document.getElementById("ClickRegister")
    

    if(btnCadastro == clicked) {
        Cadastrar.style.display = "none";
        Entrar.style.display = "block";
    } 
    else if(btnEntrar == clicked) {
        Entrar.style.display = "none";
        Cadastrar.style.display = "block";
    }

});