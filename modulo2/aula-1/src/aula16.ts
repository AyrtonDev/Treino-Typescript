// type void é usado para quando não ouver retorno

function removerElemento(el: HTMLInputElement):void {
   el.remove()
}

removerElemento( document.querySelector('teste') )

type QualquerFuncao = () => void

const algo: QualquerFuncao = () => {
   return 'bla bla bla'
}

//quando criamos um type do tipo void, ele n espera que venha um retorno, por isso não dá erro