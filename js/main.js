import { MiReloj } from "./reloj.js"
import { Cronos } from "./cronometro.js"
import { Tempor } from "./temporizador.js"

const reloj = new MiReloj()
const cronoss = new Cronos()
const tempor = new Tempor()

const btn_reloj = document.getElementById('btn-reloj')
const btn_cronometro = document.getElementById('btn-cronometro')
const btn_temporizador = document.getElementById('btn-temporizador')
const dp_crono = document.getElementById('crono')
const dp_reloj = document.getElementById('time')
const dp_tempo = document.getElementById('tempo')

reloj.hora() // iniciar mostrar hora

// Cronometro
const ini_crono = document.getElementById('iniciar-crono')
const detener_crono = document.getElementById('detener-crono')
const reiniciar_crono = document.getElementById('reiniciar-crono')

ini_crono.addEventListener('click', () => { cronoss.iniciarCrono() })
detener_crono.addEventListener('click', () => { cronoss.pausarCrono() })
reiniciar_crono.addEventListener('click', () => { cronoss.reiniciarCrono() })

// Temporizador
document.addEventListener('keydown', event => {
    const num_presionado = event.key

    if(num_presionado === '0' || num_presionado === '1' || num_presionado === '2' || num_presionado === '3' || num_presionado === '4' || num_presionado === '5' || num_presionado === '6' || num_presionado === '7' || num_presionado === '8' || num_presionado === '9') {
        if(!dp_tempo.classList.contains('hide')) {
            tempor.agregarNumero(num_presionado)
            console.log('num: ' + num_presionado)
            console.log(typeof(num_presionado))
        }
    }
    
    if(num_presionado === 'Backspace') {
        if(!dp_tempo.classList.contains('hide')) {
            tempor.borrarNumero()
        }
    }
})

const iniciar_tempo = document.getElementById('iniciar-tempo')
const borrar_tempo = document.getElementById('borrar-tempo')

iniciar_tempo.addEventListener('click', () => { tempor.iniciarTempo() })
borrar_tempo.addEventListener('click', () => { tempor.borrarTempo() })

const btn_tecl = document.getElementById('activar-tecl')
const teclado = document.getElementById('tec-nums')

btn_tecl.addEventListener('click', () => {
    teclado.classList.toggle('hide')
    if(!teclado.classList.contains('hide')) {
        document.body.style.flexDirection = 'column'
        document.body.style.gap = '3rem'
        document.getElementById('menu').style.position = 'static'
    } else {
        document.body.style.removeProperty('flex-direction')
        document.body.style.removeProperty('gap')
        document.getElementById('menu').style.position = 'absolute'
    }
})

teclado.addEventListener('click', evento => {
    let boton = evento.target

    if(boton.matches('#uno')) {
        tempor.agregarNumero('1')
    } else if(boton.matches('#dos')){
        tempor.agregarNumero('2')
    } else if(boton.matches('#tres')){
        tempor.agregarNumero('3')
    } else if(boton.matches('#cuatro')){
        tempor.agregarNumero('4')
    } else if(boton.matches('#cinco')){
        tempor.agregarNumero('5')
    } else if(boton.matches('#seis')){
        tempor.agregarNumero('6')
    } else if(boton.matches('#siete')){
        tempor.agregarNumero('7')
    } else if(boton.matches('#ocho')){
        tempor.agregarNumero('8')
    } else if(boton.matches('#nueve')){
        tempor.agregarNumero('9')
    } else if(boton.matches('#cero')){
        tempor.agregarNumero('0')
    } else if(boton.matches('#borra')){
        tempor.borrarNumero()
    }
})


// Controles
btn_cronometro.addEventListener('click', () => {
    dp_crono.classList.remove('hide')
    dp_reloj.classList.add('hide')
    dp_tempo.classList.add('hide')
})

btn_temporizador.addEventListener('click', () => {
    dp_tempo.classList.remove('hide')
    dp_reloj.classList.add('hide')
    dp_crono.classList.add('hide')
})

btn_reloj.addEventListener('click', () => {
    dp_reloj.classList.remove('hide')
    dp_crono.classList.add('hide')
    dp_tempo.classList.add('hide')
})

document.addEventListener('keydown', event => {
    let tecla = event.code
    
    switch(tecla) {
        case "KeyT":
            dp_tempo.classList.remove('hide')
            dp_reloj.classList.add('hide')
            dp_crono.classList.add('hide')
            break
            
            case "KeyR":
                dp_reloj.classList.remove('hide')
                dp_crono.classList.add('hide')
                dp_tempo.classList.add('hide')
                break
                
                case "KeyC":
                    dp_crono.classList.remove('hide')
                    dp_reloj.classList.add('hide')
                    dp_tempo.classList.add('hide')
                    break
                }
            })

            document.addEventListener("keydown", event => {
    if (event.code === "KeyF") {
        var elemento = document.documentElement
        if (elemento.requestFullscreen) {
            elemento.requestFullscreen()
            document.documentElement.classList.add("sin-cursor")
        } else {
            console.error("Fullscreen API no disponible")
        }
    }
})

document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
        document.documentElement.classList.remove("sin-cursor")
    }
})