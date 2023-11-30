const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(' Digite o nome do seu Super-Heroi: ', (nomeDoHeroi) => {
  rl.question(`Em qual XP seu Super-herói está:
    1 - 1000
    2 - Entre 1001 e 2000
    3 - Entre 2001 e 5000
    4 - Entre 5001 e 7000
    5 - Entre 7001 e 8000
    6 - Entre 8001 e 9000
    7 - Entre 9001 e 10000
    8 - Maior que 10001
    Digite a opção correspondente ao XP: `, (escolha) => {
      let opcao = parseInt(escolha);

      switch (opcao) {
        case 1:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Ferro`);
          break;
        case 2:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Bronse`);
          break;
        case 3:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Prata`);
          break;
        case 4:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Ouro`);
          break;
        case 5:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Platina`);
          break;
        case 6:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Ascendente`);
          break;
        case 7:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Imortal`);
          break;
        case 8:
          console.log(`O Super-Heroi de nome ${nomeDoHeroi} está no nível de Radiante`);
          break;
        default:
          console.log("Opção inválida.");
      }
      rl.close();
  });
});
