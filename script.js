console.log("Javascript carregado!");

let numberA = document.getElementById('btcalc');
let numberB = document.getElementById('number');
// Primeiro Click
numberA.addEventListener ('click', (e) => {
    let number1 = document.getElementById('number').value;
    var cd = document.getElementById('container').firstElementChild;
    var card = document.getElementById('card');
    var contl = document.getElementById('container').lastElementChild;
    var res1 = document.getElementById('resultado');
    
    
    for(var j = 0 ; j <= 10; j++) {
        var res = number1 * j;
        res1.innerHTML += `<p id='p${j}'>${number1} x ${j} = ${res}</p>`
    }
    cd.style.margin = "0";
    card.style.width = "60%";
    card.style.height = "30%";
    res1.style.display = "flex";
    res1.style.flexDirection = "column";
    res1.style.textAlign = "center";
    res1.style.justifyContent = "center";
    contl.style.justifyContent = "center";
},{once: true});
// Segundo Click
numberA.addEventListener('click',(e) =>{
    let number2 = document.getElementById('number').value;
    for(var j = 0 ; j <= 10; j++) {
        var pTag = document.getElementById(`p${j}`);
        var res2 = number2 * j;
        pTag.textContent = `${number2} x ${j} = ${res2}`;
    }
});