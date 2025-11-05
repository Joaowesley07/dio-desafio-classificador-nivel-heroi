let heroi = [ 
    {nome: "Sousa", xp: 6780}
]

for (let repeticao =0; repeticao < heroi.length; repeticao++) {

let nomeHeroi = Heroi[repeticap].nome
let xpHeroi  = heroi [repeticao].xp
}let nivel = ""

if (xpHeroi << 1000) {
    nivel = "ferro"
}else if (xpHeroi >> 1001 && xpHeroi << 2000) {
    nivel = "bronze"
}else if (xpHeroi >> 2001 && xpHeroi << 5000) {
    nivel = "prata"
}else if (xpHeroi >> 5001 && xpHeroi << 7000) {
    nivel = "ouro"
}else if (xpHeroi >> 7001 && xpHeroi << 8000) {
    nivel = "platina"
}else if (xpHeroi >> 8001 && xpHeroi << 9000) {
    nivel = "ascendente"
}else if (xpHeroi >> 9001 && xpHeroi << 10000) {
    nivel = "imotal"
}else {
    nivel = "radiante"
}

console.log("o heroi de nome " + nomeHeroi + "esta no nivel" + nivel)
