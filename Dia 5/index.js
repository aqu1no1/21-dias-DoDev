// Dia 5 ) EXERCICIO 1 - Calculadora DoDev

/*
let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite um numero"))
let result
let opcao = Number(prompt("Digite um numero de (1- + , 2- - , 3- X , 4- /)"))


switch(opcao){
    case 1:
        console.log("Entrou na Calculadora de SOMA")
        result = Number(num1 + num2)
        console.log(result)
        break;
    case 2:
        console.log('Entrou na Calculadora de SUBTRACAO')
        result = Number(num1 - num2)
        console.log(result)
        break;  
    case 3:
        console.log('Entrou na Calculadora de MULTIPLICACAO')
        result = Number(num1 * num2)
        console.log(result)
        break;      
    case 4:
        console.log('Entrou na Calculadora de DIVISAO')
        result = Number(num1 / num2)
        console.log(result)
        break;
}
*/

// Dia 5 ) EXERCICIO 2 - DoDev thru

let opcao = Number(prompt("Digite um numero 1 ate 3 (1-Gasolina,2-Alcool,3-Calibrar Pneus)"))

switch(opcao){
    case 1:
        console.log("Voce escolheu abastecer seu automovel com gasolina")
        let valor1 = Number(prompt("Quanto em reais quer colocar em Gasolina?"))
        let result1 = valor1 * 5
        console.log(result1)
        break;

    case 2:
        console.log("Voce escolheu abastecer seu automovel com alcool")
        let valor2 = Number(prompt("Quanto em reais quer colocar em Alcool?"))
        let result2 = valor2 * 3
        console.log(result2)
        break; 

    case 3:
        console.log("pneus calibrados com sucesso")
        break;      
}






