var milesimos = 00;
var segundos = 00;
var minutos = 00;

let contMseconds = document.getElementById("mseconds");
let contSeconds = document.getElementById("seconds");
let contMinutes = document.getElementById("minutes");

let botStart = document.getElementById("start");
let botStop = document.getElementById("stop");
let botReset = document.getElementById("reset");

let texto = document.getElementById("textoh3")

var  interval;

botStart.onclick = function (){
    clearInterval(interval);
    interval = setInterval(start,10);

    texto.style.color = 'lightgreen';
}

botStop.onclick = function(){
    clearInterval(interval);

    if (segundos == 0){
        texto.style.color = 'white';
    } else if (segundos != 0){
        texto.style.color = 'red';
    }
    
}

botReset.onclick = function(){
    clearInterval(interval);
    contMseconds.innerHTML = "00";
    contSeconds.innerHTML = "00";
    contMinutes.innerHTML = "00";
    segundos = 0;
    milesimos = 0;
    minutos = 0;

    texto.style.color = 'white';
}

function start(){
    milesimos++;

    if (milesimos <= 9){
        contMseconds.innerHTML = "0" + milesimos;
    }
    else {
        contMseconds.innerHTML = milesimos;
    }

    if (milesimos > 99 & segundos < 9){
        segundos++;
        contSeconds.innerHTML = "0" + segundos;
        milesimos = 0;
        contMseconds.innerHTML = "00";
        
    }
    else if (milesimos > 99 & segundos >= 9){
        segundos++;
        contSeconds.innerHTML = segundos;
        milesimos = 0;
        contMseconds.innerHTML = "00";
        
    }

    if ( segundos > 59 & minutos < 9){
        minutos++;
        contMinutes.innerHTML = "0" + minutos;
        segundos = 0;
        contSeconds.innerHTML = "00";
        
    }

    else if (segundos > 59 & minutos >= 9){
        minutos++;
        contMinutes.innerHTML = minutos;
        segundos = 0;
        contSeconds.innerHTML = "00";
        
    }
}