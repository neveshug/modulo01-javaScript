// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

const usuarios = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

//função calculaSaldo recebe receitas e depesas
//do USUARIO
//deve retonnar despesas - receitas
function calculaSaldo(receitas, despesas) {
    //somaNumeros()
    let calculoReceitas = somaNumeros(receitas)
    let calculoDespesas= somaNumeros(despesas)

    let soma = calculoReceitas - calculoDespesas
    return soma;
}

function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let soma = 0
    for(let numero of numeros){
        soma = soma + numero;
    }
    return soma
}

//Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

for(let usuario of usuarios){
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    let positivoOuNegativo;
    if(saldo >= 0){
        positivoOuNegativo = "POSITIVO"
    }else{
        positivoOuNegativo = "NEGATIVO"
    }
    console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
}