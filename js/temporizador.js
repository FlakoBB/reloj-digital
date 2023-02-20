export class Tempor {
    constructor() {
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.dis_tempo = document.getElementById('dis-tempo')
        this.texto_actual = this.dis_tempo.textContent
        this.numeros = this.texto_actual.replace(/:/g, '')
        this.arreglo_nums = [...this.numeros]
        this.contador = 0
        this.timer = '00:00:00'
        this.intervalo = null
        this.alarma = new Audio('../assets/audios/alarma.mp3')
    }

    agregaCero(numero) {
        if(numero < 10) {
            numero = "0" + numero
        }
        
        return numero
    }
    
    agregarNumero(numero) {
        if(this.contador < 6) {
            this.contador++
            this.arreglo_nums.shift()
            this.arreglo_nums.push(numero)
    
            let cadena1 = this.arreglo_nums.join('')
            let cadena2 = cadena1.match(/.{1,2}/g).join(':')
    
            this.dis_tempo.textContent = cadena2
            this.timer = cadena2
        }
    }

    borrarNumero() {
        if(this.contador > 0) {
            this.contador--
            this.arreglo_nums.pop()
            this.arreglo_nums.unshift('0')

            let cadena1 = this.arreglo_nums.join('')
            let cadena2 = cadena1.match(/.{1,2}/g).join(':')
        
            this.dis_tempo.textContent = cadena2
            this.timer = cadena2
        }
    }

    iniciarTempo() {
        if(this.timer !== '00:00:00' && !this.intervalo) {
            let arreglo_timer = this.timer.split(':')
            this.horas = parseInt(arreglo_timer[0])
            this.minutos = parseInt(arreglo_timer[1])
            this.segundos = parseInt(arreglo_timer[2])
            
            if(this.segundos > 60) {
                let nuevos_minutos = Math.floor(this.segundos / 60)
                this.segundos = this.segundos % 60
                this.minutos += nuevos_minutos
            }

            if(this.minutos > 60) {
                let nuevas_horas = Math.floor(this.minutos / 60)
                this.minutos = this.minutos % 60
                this.horas += nuevas_horas
            }

            this.intervalo = setInterval(() => {
                if(this.minutos === 0 && this.horas > 0) {
                    this.horas--
                    this.minutos = 60
                }
                if(this.segundos === 0 && this.minutos >= 0) {
                    this.minutos--
                    this.segundos = 60
                }
                this.segundos--

                if(this.segundos === 0 && this.minutos === 0 && this.horas === 0) {
                    document.body.classList.add("bg-alarma")
                    this.alarma.loop = true
                    this.alarma.play()
                    clearInterval(this.intervalo)
                    this.horas = 0
                    this.minutos = 0
                    this.segundos = 0
                    this.contador = 0
                    this.timer = '00:00:00'
                    this.intervalo = null
                    this.dis_tempo.textContent = this.timer
                    this.numeros = this.timer.replace(/:/g, '')
                    this.arreglo_nums = [...this.numeros]
                }
                this.dis_tempo.textContent = `${this.agregaCero(this.horas)}:${this.agregaCero(this.minutos)}:${this.agregaCero(this.segundos)}`
            }, 1000)

        }
    }

    borrarTempo() {
        document.body.classList.remove("bg-alarma")
        this.alarma.pause()
        this.alarma.currentTime = 0
        clearInterval(this.intervalo)
        this.horas = 0
        this.minutos = 0
        this.segundos = 0
        this.contador = 0
        this.timer = '00:00:00'
        this.intervalo = null
        this.dis_tempo.textContent = this.timer
        this.numeros = this.timer.replace(/:/g, '')
        this.arreglo_nums = [...this.numeros]
    }
}