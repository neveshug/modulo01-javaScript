// Calculo Aposentadoria
//Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

if(sexo == "F"){
    if(contribuicao >= 30 || (contribuicao + idade) >= 85){
        console.log(`${nome}, você pode se aposentar`)
    }
        console.log(`${nome}, você ainda não pode se aposentar`)
}
