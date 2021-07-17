//let age: number | string = 90
            //OU
let age: (number | string) = 90

age = '27'

function mostrar (idade: number | string) {
   if (typeof idade == 'string'){
      console.log(idade.toUpperCase())
   } else {
      console.log(idade)
   }
}

mostrar(90)
mostrar('90')

// se a função tem um parametro mais de um tipo e sera rodado para um tipo desses parametros, obrigatoriamente tem que se verificaar o tipo.