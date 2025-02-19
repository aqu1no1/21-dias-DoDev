//Pratica Dia 4 -> EXERCICIOS - 1

//let fome = prompt("Esta com fome??")
//let dinheiro = prompt("Esta com dinheiro??")
//let restaurante = prompt("O restaurante esta aberto??")


//if(fome === "Sem fome" || dinheiro === "Sem dinheiro"){

//    console.log("Hoje a janta será em casa")

//} else if(fome === "Com fome" && dinheiro === "Com dinheiro" && restaurante === "Fechado"){

//    console.log("Peça um delivery!")

//} else if(fome === "Com fome" && dinheiro === "Com dinheiro" && restaurante === "Aberto"){

//    console.log("Hoje o jantar será no seu restaurante preferido!")

//}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Pratica Dia 4 -> EXERCICIOS - 2

let Nome = prompt("Qual e seu Nome??")
let Idade = Number(prompt("Qual e sua Idade??"))
let CartaM = prompt("Possui uma Carta de motorista??")
let Carro = prompt("Possui um Caroo??")

if(Idade < 18 || CartaM === "Nao"){

    console.log("Giovanni, você não pode dirigir")

} else if(Idade >= 18 && CartaM === "Sim" && Carro === "Nao"){

    console.log("Giovanni, você pode dirigir mas não tem um carro")

} else if(Idade >= 18 && CartaM === "Sim" && Carro === "Sim"){

    console.log("Giovanni, você será o motorista!")
    
}