export class MiReloj {
    constructor() {
        this.reloj = document.getElementById("time")
    }

    agregaCero(numero) {
        if(numero < 10) {
            numero = "0" + numero
        }
        
        return numero
    }
    
    hora() {
        setInterval(() => {
            const hora_actual = new Date()
            
            let horas = hora_actual.getHours()
            let minutos = hora_actual.getMinutes()
            let segundos = hora_actual.getSeconds()
            
            this.reloj.innerHTML = `${this.agregaCero(horas)}:${this.agregaCero(minutos)}:${this.agregaCero(segundos)}`
        }, 1000)
    }
}