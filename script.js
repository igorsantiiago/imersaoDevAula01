function calcMedia() {
    var n1 = parseInt(document.querySelector('#nota1').value);
    var n2 = parseInt(document.querySelector('#nota2').value);
    var n3 = parseInt(document.querySelector('#nota3').value);
    var n4 = parseInt(document.querySelector('#nota4').value);

    var calcular = ((n1 + n2 + n3 + n4) / 4);
    var calculate = calcular.toFixed(1);

    console.log(calculate);

    document.querySelector("#result").innerHTML = ("Sua nota final é <br>") + calculate;
}

function temperatura() {
    var temperatura = parseInt(document.querySelector('#temperatura').value);

    var calculoTemperatura = (temperatura * 9/5) + 32;
    var conversao = calculoTemperatura.toFixed(1);

    console.log(conversao);

    document.querySelector("#resultado-conversao").innerHTML = ("A conversão de " + temperatura + " graus Celsius em Fahrenheit é: <br>" + conversao + " Fahrenheit");
}
