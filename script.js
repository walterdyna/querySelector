/* 

Buscar o elemento no HTML...

document --> HTML

getElementById --> Tras um elemento pelo ID

getElementByClassName --> Tras TODOS os elementos com essa classe

getElementByTagName --> Tras TODOS os elementos com essa TAG

gatElementByName --> Tras TODOS os elementos com esse NAME


querySelector --> Tras UM elemneto, O PRIMEIRO que encontra

querySelectorAll --> Tras TODOS os elementos que encontrar

*/

const input = document.getElementById ("main-input")
console.log(input)

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements)

const tag = document.getElementsByTagName("h1")
console.log(tag)

const selecaoPelaTag = document.querySelector("p") // buscar pela TAG
console.log(selecaoPelaTag)

const selecaoPelaClasse = document.querySelector(".paragraph-js") // Busca pela CLASSE
console.log(selecaoPelaClasse)

const selecaoPelaClasseButton = document.querySelector("button.paragraph-js") // Busca pela CLASSE - E ELEMENTO
console.log(selecaoPelaClasseButton) 

const selecaoPelaID = document.querySelector("#main-input") // Busca pelo ID
console.log(selecaoPelaID) 