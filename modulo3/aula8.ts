function somar (n1: number, n2: number, n3: number): number {
   let dica4: string = 'Se vc for usar -noUnusedLocals-, ele avisara qnd uma variavel que foi criada do tipo local, n estiver sendo usada, e se a opção -noEmitOnError- tambem estiver ativada, ele n compilara, msm n tendo erros'
   return n1 + n2
}

// Tbm e bom ativar o -noUnusedParameters-, pq ele tambem mostrara, parametros que n estiverem sendo usados, e n compilara

function somar2 (n1: number, n2: number): number {
   if(n1>10){
      return n1 + n2
   }
}

// Nesse caso, precisasse ativar o -noImplicitReturns-, apontaram qnd n tiver um return explicito.