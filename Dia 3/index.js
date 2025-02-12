
let nome = prompt('Insira seu Nome:');
let idade = parseInt(prompt('Insira sua Idade:'));
let altura = Number(prompt('Insira sua Altura:'));
let peso = Number(prompt('Insira seu Peso:'));
let imc = peso / (altura * altura);
const ano = 2023;
let calAnoDeNasc = 2023 - idade;

console.log(`Olá ${nome}, você tem ${idade} anos, nasceu em ${calAnoDeNasc}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imc} Kg/m²`);
   