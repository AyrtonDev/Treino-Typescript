let numero1 = document.querySelector('#numero1') as HTMLInputElement
let numero2 = document.querySelector('#numero2') as HTMLInputElement
let res = document.querySelector('#resultado')

function calcular (n1: number, n2: number) {
   return n1 + n2
}

document.querySelector('#calcular').addEventListener('click', ()=>{
   res.innerHTML = calcular(+numero1.value, +numero2.value).toString()
})

//Para não criar o arquivo caso haja um Erro usa no final do comando --noEmitOnError