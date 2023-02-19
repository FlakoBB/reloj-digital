export class Cronos {
    constructor() {
        this.dis_crono = document.getElementById('dis-crono')
        this.inicio = null
        this.intervalo = null
        this.transcurrido = 0
    }

    iniciarCrono() {
        if(!this.inicio) {
            this.inicio = Date.now()
            this.intervalo = setInterval(() => {
                this.transcurrido = Date.now() - this.inicio
                this.mostrarTiempo()
            }, 1)
        }
    }

    pausarCrono() {
        clearInterval(this.intervalo)
    }

    reiniciarCrono() {
        if(this.inicio) {
            clearInterval(this.intervalo)
            this.inicio = null
            this.intervalo = null
            this.dis_crono.textContent = '00:00:00:000'
        }
    }

    agregarCero(numero, longitud = 2) {
        return numero.toString().padStart(longitud, "0");
    }

    mostrarTiempo() {
        const horas = Math.floor(this.transcurrido / 3600000)
        const minutos = Math.floor((this.transcurrido % 3600000) / 60000)
        const segundos = Math.floor((this.transcurrido % 60000) / 1000)
        const mili = this.transcurrido % 1000

        this.dis_crono.textContent = `${this.agregarCero(horas)}:${this.agregarCero(minutos)}:${this.agregarCero(segundos)}:${this.agregarCero(mili, 3)}`
    }
}