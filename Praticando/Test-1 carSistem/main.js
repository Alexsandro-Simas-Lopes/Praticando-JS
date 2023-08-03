const bugattiCar = document.querySelector('.Bugatti')
const lamborgineCar = document.querySelector('.Lamborgine')
const teslaCar = document.querySelector('.Tesla')

const submitButton = document.querySelector('#carros')
submitButton.addEventListener("change", function (e) 
{
    e.preventDefault();

    const carInput = document.querySelector('#carros')
    const idCarValue = carInput.value;
    var img = document.getElementById("imagem");

    if (idCarValue == 1) {
        //console.log(sobreBugatti)
        document.getElementById("resultado").innerText=sobreBugatti;
        img.setAttribute('src', 'bugatti.png');
        img.style.display = "block";
    } else if (idCarValue == 2) {
        //console.log(sobreLamborgine)
        document.getElementById("resultado").innerText=sobreLamborgine;
        img.setAttribute('src', 'lamborgine.png');
        img.style.display = "block";
    } else if (idCarValue == 3) {
        //console.log(sobreTesla)
        document.getElementById("resultado").innerText=sobreTesla;
        img.setAttribute('src', 'tesla.png');
        img.style.display = "block";
    } else {
        return alert("Please select a option the list!")
    }


});

//SOBRE OS CARROS
const sobreTesla = "A Tesla é uma empresa especializada em carros elétricos fundada em 2003, em São Francisco, Califórnia pelos engenheiros  Martin Eberhard e Marc Tarpenning."
const sobreBugatti = "A Bugatti, por sua vez, continuará a fabricar carros em sua casa atual, Molsheim, na França, de acordo com um anúncio da Porsche."
const sobreLamborgine = "A Lamborghini, pode acreditar, começou como fábrica de tratores e implementos agrícolas. Porém, a italiana ficou famosa ao se inserir no mercado de esportivos de luxo que já incluía, entre outros, a Ferrari."
console.log("\n(Bugatti-Lamborgine-Tesla)")

