//creo la constante para traer el id del h2 donde insertare el valor que traeré de la api
const chistes = document.querySelector('#jokes');

//creo la constante para traer el id del boton al que le hare un evento para actualizar el consumo que quiero hacer de la api
const boton = document.querySelector('#actualizar');

//dentro de una funcion,con'.getJSON'hago un consumo de la api, con function hago un llamado a los datos y retorno los valores que quiero pedir a la api dentro de la etiqueta html

function cargarFrase() {
    $.getJSON('https://api.chucknorris.io/jokes/random', function(datos) {
        chistes.textContent = datos.value
    });
}

//llamo a la funcion que traera los datos solicitados
cargarFrase();

//llamo al boton de hatml con 'addEventListener' con un evento click y retorno la funcion que cargara la frase
boton.addEventListener('click', function() {
    cargarFrase()
})