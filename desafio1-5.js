//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários
//"Carlos trabalha com HTML, CSS"

// join trasforma o array em string e adciona caracteres entre as posições do array

for (let usuario of usuarios){
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}