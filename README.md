# dio-desafio-classificador-nivel-heroi
Desafio proposta por Felipao na DIO - Classificador de Nivel de Heroi (JavaScript)
# 🦸‍♂️ Desafio DIO - Classificador de Nível de Herói

Desafio proposto por **Felipão** na plataforma **DIO**.

## 🎯 Objetivo
Criar um programa que classifique o nível de um herói com base em sua experiência (XP).

## 💻 Tecnologias utilizadas
- JavaScript (Node.js)
- Lógica de Programação
- Estruturas de decisão

## 📜 Código
```javascript
let heroi = [
  { nome: "Sousa", xp: 6780 }
];

for (let repeticao = 0; repeticao < heroi.length; repeticao++) {
  let nomeHeroi = heroi[repeticao].nome;
  let xpHeroi = heroi[repeticao].xp;
  let nivel = "";

  if (xpHeroi < 1000) nivel = "Ferro";
  else if (xpHeroi <= 2000) nivel = "Bronze";
  else if (xpHeroi <= 5000) nivel = "Prata";
  else if (xpHeroi <= 7000) nivel = "Ouro";
  else if (xpHeroi <= 8000) nivel = "Platina";
  else if (xpHeroi <= 9000) nivel = "Ascendente";
  else if (xpHeroi <= 10000) nivel = "Radiante";
  else nivel = "Imortal";

  console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}
