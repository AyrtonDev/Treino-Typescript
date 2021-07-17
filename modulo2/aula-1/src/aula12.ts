// Type Assertions é uma forma de auxilar o typescript para definir de forma correta elementos tirados do html

let idadeField = document.querySelector('#idade') as HTMLInputElement

// ...

console.log( idadeField.value )