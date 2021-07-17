//quando um dos valores for opcional, usar interrogação do lado do parametro
const resumo = (usuario: {nome: string, idade?: number}) => {
   if (usuario.idade !== undefined){
      return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
   } else {
      return `Olá ${usuario.nome}, tudo bem?`
   }
}

let u = {
   nome: 'Ayrton', 
   idade: 26
}

resumo(u)

//Definindo types de object, todas as vezes que for usar object, tem que declarar os dados que ira usar dele.