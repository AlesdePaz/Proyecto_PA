const Mousetrap = require('mousetrap');

var botonUno = document.getElementById('botonUno')
// otra forma de realizarlos es:  'document.getElementById('botonUno').onclick = clickUno' 
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')

var botonSuma = document.getElementById('botonSuma')
// otra forma: 'document.getElementById('botonSuma').addEventListener('click', clickSuma)'
var botonResta = document.getElementById('botonResta')
var botonDivision = document.getElementById('botonDivision')
var botonMult = document.getElementById('botonMult')
var actual = document.getElementById('numeroActual')
var resultado = document.getElementById('resultado')

var Retroceder = document.getElementById('botonRetroceder')
var Borrar = document.getElementById('botonBorrar')

botonUno.addEventListener('click', clickUno)
botonDos.addEventListener('click', clickDos)
botonTres.addEventListener('click', clickTres)
botonCuatro.addEventListener('click', clickCuatro)
botonCinco.addEventListener('click', clickCinco)
botonSeis.addEventListener('click', clickSeis)
botonSiete.addEventListener('click', clickSiete)
botonOcho.addEventListener('click', clickOcho)
botonNueve.addEventListener('click', clickNueve)
botonCero.addEventListener('click', clickCero)

botonSuma.addEventListener('click', clickSuma)
botonResta.addEventListener('click', clickResta)
botonDivision.addEventListener('click', clickDivision)
botonMult.addEventListener('click', clickMult)
Retroceder.addEventListener('click', clickRetro)
Borrar.addEventListener('click', clickBorrar)

Mousetrap.bind('1', clickUno) /*funciona para usar el teclado numerico en lugar 
de dar click sobre los botones numericos de nuesta calculadora*/

function clickUno(){
    actual.innerHTML+='1'
}
function clickDos(){
    actual.innerHTML+='2'
}
function clickTres(){
    actual.innerHTML+='3'
}
function clickCuatro(){
    actual.innerHTML+='4'
}
function clickCinco(){
    actual.innerHTML+='5'
}
function clickSeis(){
    actual.innerHTML+='6'
}
function clickSiete(){
    actual.innerHTML+='7'
}
function clickOcho(){
    actual.innerHTML+='8'
}
function clickNueve(){
    actual.innerHTML+='9'
}
function clickCero(){
    actual.innerHTML+='0'
}

function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'
}
function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if(valorResultado != 0){
    resultado.innerHTML = valorResultado - valorActual
    actual.innerHTML = '0'
    }else{
        resultado.innerHTML = valorResultado + valorActual
        actual.innerHTML = '0'
    }
}
function clickDivision(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if(valorResultado != 0){
        resultado.innerHTML = valorResultado / valorActual
        actual.innerHTML = '0'
        }else{
            resultado.innerHTML = valorResultado + valorActual
            actual.innerHTML = '0'
        }
}
function clickMult(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    if(valorResultado != 0){
        resultado.innerHTML = valorResultado * valorActual
        actual.innerHTML = '0'
        }else{
            resultado.innerHTML = valorResultado + valorActual
            actual.innerHTML = '0'
        }
}
function clickRetro(){
    actual.innerHTML = '0'
}
function clickBorrar(){
    resultado.innerHTML = '0'
    actual.innerHTML = '0'
}