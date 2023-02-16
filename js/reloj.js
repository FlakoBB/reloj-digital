function agregaCero(numero) {
    if(numero < 10) {
        numero = "0" + numero
    }
    
    return numero
}

const reloj = document.getElementById("time")

export function hora() {
    setInterval(() => {
    const hora_actual = new Date()
    
    let horas = hora_actual.getHours()
    let minutos = hora_actual.getMinutes()
    let segundos = hora_actual.getSeconds()
    
    reloj.innerHTML = `${agregaCero(horas)}:${agregaCero(minutos)}:${agregaCero(segundos)}`
}, 1000)
}