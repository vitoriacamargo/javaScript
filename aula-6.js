var comprarRefrigerante = false
var comprarCerveja = false
var comprarSucoNatural = false
 
var convidado = {
  nome: 'pedro',
  idade: 18,
  bebeCerveja: true,
  bebeRefrigerante: true
}
 
if (convidado.bebeRefrigerante) {
  comprarRefrigerante = true
} else if (convidado.bebeCerveja && convidado.idade >= 18) {
  comprarCerveja = true
} else {
  comprarSucoNatural = true
}
 
console.log(comprarRefrigerante, comprarCerveja, comprarSucoNatural)
