let names = ['junior', 'matheus', 'luan', 'gabriel', 90]

names.forEach(nome => {
   if (typeof nome == 'string'){
      console.log(nome.toUpperCase)
   } else {
      console.log(nome)
   }
})

//Typescript tbm analise o contexto do codigo, mostrando que muitas das vezes não precisa declarar o type