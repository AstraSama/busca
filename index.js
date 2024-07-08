const modulos = require("./modulos.js");
const prompt = require("prompt-sync")();

let lista = [];

let entrada = prompt("Digite um tamanho: ");
lista = modulos.GERAR(lista, entrada);
lista = modulos.ORDENAR(lista);




console.log(lista);
let resposta = prompt("Qual número quer buscar: ");
modulos.BUSCAR(lista, resposta);