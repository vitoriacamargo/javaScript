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
   
  for (var i = 0; i <= convidados.length; i++) {
   console.log(convidado[i].nome, convidado[i].bebeCerveja)
    if (convidados[i].bebeCerveja) {
      comprarCerveja = true
      break
    }
  }
   
  console.log(comprarCerveja)
