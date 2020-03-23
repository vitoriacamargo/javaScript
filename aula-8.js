var convidados = [
  {
    nome: 'Pedro',
    idade: 20,
    bebeRefrigerante: false,
    bebeCerveja: true
  },
  {
    nome: 'Maria',
    idade: 17,
    bebeRefrigerante: true,
    bebeCerveja: false
  },
  {
    nome: 'João',
    idade: 19,
    bebeRefrigerante: true,
    bebeCerveja: true
  }
]
 
var comprarCerveja = false
var i = 0
 
while (i < convidados.length) {
  if (convidados[i].bebeCerveja) {
    comprarCerveja = true
    break
  }
  i++
}
 
console.log(comprarCerveja)
