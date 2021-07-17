// declaração de tipo de variavel e boa ser utilizado em variaveis muito grandes ou muito usadas, que evita a quantidade declaraçào de type exagerada

type NomeCompleto = string

// ao criar usando o type, você n pode modifica-la, equivale a um const
/*type User = {
   nome: string,
   idade: number
}*/

// ao criar com o interface, ele permite que futuramente possa adiconar novos tipos, equivale ao let
interface User {
   nome: string,
   idade: number
}

function resume (usuario: User) {
   return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resume({
   nome: 'Ayrton',
   idade: 90
})