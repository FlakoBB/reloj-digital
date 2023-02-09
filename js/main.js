function agregaCero(numero) {
    if(numero < 10) {
        numero = "0" + numero
    }
    
    return numero
}

const reloj = document.getElementById("time")

setInterval(() => {
    const hora_actual = new Date()
    
    let horas = hora_actual.getHours()
    let minutos = hora_actual.getMinutes()
    let segundos = hora_actual.getSeconds()
    
    reloj.innerHTML = `${agregaCero(horas)}:${agregaCero(minutos)}:${agregaCero(segundos)}`
}, 1000)

document.addEventListener("keydown", function(event) {
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