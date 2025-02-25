// Dia 7 - Exercicios 1 (DoDev school (WHILE))
/*
let nota = Number();
let cadastrar;
let sexo;
let soma= Number();
let m= Number();
let f7= Number();
let f = Number();
let notaM = 0;
let totalAlunos = Number();
while(cadastrar !== "n"){
    cadastrar = prompt("Deseja cadastrar um aluno s/n?")

    if(cadastrar === "n"){
        break;
    }

    nota = Number(prompt("Digite a nota do aluno?"))
    sexo = prompt("Digite o sexo do aluno f/m?")
    soma += nota;

    if(sexo === "m"){
        m++;
        if(nota > notaM){
            notaM = nota;
        }
    }

    if(nota > 7 && sexo === "f"){
        f7++;
    } else {
        f++;
    }

    
}

console.log("Média geral dos alunos:" + soma / (m + f + f7))
console.log("Quantos homens enviaram as notas:" + m)
console.log("Quantas mulheres tiveram nota acima de 7:" + f7)
console.log("Qual a maior nota entre os homens:" + notaM)
*/

//////////////////////////////////////////////////////////////////////////////////////////

// Dia 7 - Exercicios 2 (2 - Caixa eletrônico DoDev (DOWHILE))

let nome;
let cpf;
let saldo = 1000;
let valor = Number()
let condicao = Number()
let op;
let maiorvalor = 0;
let soma= Number()
let saque = 0
let dep = 0

do{
    nome = prompt("Digite seu nome.")
    cpf =  prompt("Digite seu CPF.")
    valor = Number(prompt("Digite um valor."))
    soma += valor
    op = prompt("Deseja Saque ou Depósito")

    if(maiorvalor < valor){
        maiorvalor = valor
    }

    if(valor < 0){
        valor = Number(prompt("Digite um valor positivo."))
    }



    if (op === "saque") {
        saque++
        if(valor > saldo){
            prompt("Nao e possivel fazer essa transacao")
        }
        saldo = saldo - valor;
       

    } else if(op === "deposito" ) {
        dep++
        saldo = saldo + valor;
    }



    condicao = Number(prompt("Insira 1 para continuar e 2 para parar."))

    if(condicao === 1){

        console.log("=================================")
        console.log("Saldo total = " + saldo)
        console.log("O maior valor inserido = " + maiorvalor)
        console.log("Média dos valores inseridos = " + soma / (dep + saque) )
        console.log("=================================")


    }

} while (condicao !== 2);