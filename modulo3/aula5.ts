const botao = document.querySelector('button') as HTMLButtonElement
botao.addEventListener('click', () => {
   console.log('Clicou!')
})

// lib no tsconfig.json é um recurso muito necessarioa qnd vc trabalha com elementos que estao em outras partições foram do projeto, mas além de adicionar a pasta dos arquivos que irá usar precisa adicionar as bibliotecas de funcionalidade basica do Typescript. Ec.: "DOM", "ES5", "DOM.Iterable" e "ScriptHost"