let file = "fetch_info.txt" // chama o arquivo txt no servidor
fetch (file).then(x => x.text()) // le o arquivo que esta no servidor// pega o texto // pega o valor do texto // then é utilizado para funções não async
    .then(y => document.getElementById("demo1").innerHTML = y); // coloca em uma div ou camada qualquer do painel

async function getText(file){ //cria uma função assincrona
    let x = await fetch(file); // caso a função não seja async não podemos usar await
    let y = await x.text();
    document.getElementById("demo2").innerHTML = y;
    // não temos o retorno do dado em funções async e sim o promise do dado, pois pode não acontecer
}
getText("fetch_info.txt");

//exemplo da utilização do formato FetchAPI e o Modelo Assíncrono

// Metodo API no modo GET // O metodo padrão é GET para consulta

async function loadNames(){
    const response = await fetch('/api/names'); //chama um endereço api/names no servidor, que retorne os nome no formato JSON
    const names = await response.json(); // espera para ser executado // uma promessa de execução

    console.log(names); // sopondo valores de exemplo: [{name:'Joker'},{name:'Batman'}]
}

loadNames();