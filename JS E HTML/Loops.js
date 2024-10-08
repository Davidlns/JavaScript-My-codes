let a = 1

while (a <= 10){ //repete enquanto a função for verdadeira
    console.log(`Carro ${a} lavado`);
    a++;
}

do { // do while executa a função pelo menos uma vez, mesmo que ela seja falsa
    console.log(a);
    a++;
} while(a <= 10)

for (let a = 1; a <= 10; a++){ // comandos são executados para cada valor fornecido na estrutura // estrutura dividida em três áreas (inicialização, teste/condição, e incremento)

    // podemos ter mais de um incremento, mais de uma inicialização, mas podemos ter apenas uma condição (ou usar os operadores &&, // para combinar condição)
    console.log(a);
}

for (let x in person){ // interação nas propriedades de um objeto // percorre por todos os elementos de uma lista, ou um objeto
    text += person[x] + ""; // x é o nome do campo
}