const numbers = [45, 4, 9, 16, 25];
let txt = "";

for (let x in numbers) { //para cada posição do conjunto
    txt += numbers[x]; //pegue o numero na posição e some com o que ja existe em txt
}

const letters = ["a", "b", "c"];

for (const x of letters) { //pega cada letra do conjunto acima
    txt += x;
}

// Switch, IF/ELSE, WHILE, DO/WHILE, FOR, FOR IN, FOR OF