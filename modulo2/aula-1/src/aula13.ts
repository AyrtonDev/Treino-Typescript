// Type literais, é usado para definir valores padrões afim de evitar futuros erros.

let nick: 'Notyra' = 'Notyra'

function mostraTexto (
   texto: string,
   align: 'left' | 'right' | 'center'
) {
   return `<div style="text-align: ${align};">${texto}</div>`
}

mostraTexto('Ayrton', 'left')
mostraTexto('Ayrton', 'right')
//mostraTexto('Ayrton', 'blablabla')


type verdadeiroOuFalse = true | false

function temNome (nome: string): verdadeiroOuFalse{
   if(nome !== ''){
      return true
   }else{
      return false
   }
}

type opcao = {
   width: number,
   height: number
}

function configurar(props: opcao | 'auto') {

}

configurar({width: 100, height: 200})
configurar('auto')