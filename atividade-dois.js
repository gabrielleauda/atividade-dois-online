var idade = 18
var dataDoEvento = 31/06/2022
let listaDeParticipantes = ["Maria", "João", "Lucas", "Fernanda", "Leonardo", "Rafael", "Patricia"]

 console.log ("Insira sua idade:");

if (idade >= 18) {
    console.log ("Idade aprovada, insira data do evento:")
} else {
    console.log ("Iscrição não concluída. Idade não compatível com o mínimo necessário")
};

if (dataDoEvento >= 30/06/2022) {
    console.log ("Data do evento aprovada, insira a lista de palestrantes:")
} else {
    console.log ("Inscrição não concluída. Data deve ser posterior a data atual")
};

console.log ("Insira lista de participantes:");

let quantidadeDeParticipantes = listaDeParticipantes.length;
console.log (quantidadeDeParticipantes);

if (quantidadeDeParticipantes <= 100) {
    console.log ("Inscrição concluída!")
} else {
    console.log ("Inscrição não concluída. Número de particiopantes excede o número permitido")
};