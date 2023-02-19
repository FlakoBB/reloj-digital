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
    }
    
    agregarNumero(numero) {
        
        if(this.contador <= 6) {
            this.contador++
            this.arreglo_nums.shift()
            this.arreglo_nums.push(numero)
    
            let cadena1 = this.arreglo_nums.join('')
            let cadena2 = cadena1.match(/.{1,2}/g).join(':')
    
            this.dis_tempo.textContent = cadena2
        }
    }

    borrarNumero() {
        this.contador--
        this.arreglo_nums.pop()
        this.arreglo_nums.unshift('0')

        let cadena1 = this.arreglo_nums.join('')
        let cadena2 = cadena1.match(/.{1,2}/g).join(':')
    
        this.dis_tempo.textContent = cadena2
    }
}