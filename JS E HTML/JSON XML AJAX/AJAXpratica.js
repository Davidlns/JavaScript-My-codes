function ajax(nome, camada){
    var url = 'https://httpbin.org/get?text=' + nome;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){ // é a função que fica preparada para receber informações do servidor // callback
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){ // condição que confirma que recebi toda a informação necessária
            var resp = xmlhttp.responseText; // pega o texto da resposta completa
            document.getElementById(camada).innerHTML = resp; // esta inserindo a resposta em uma camada do documento html
        }
    }

    xmlhttp.open("GET", url, true); // abre em modo GET a url de forma assincrona
    xmlhttp.send(); // ativa a funcão onready para que comece a receber
    // programa funciona de uma forma async // não prende a execução // pode ter várias chamadas ao mesmo tempo // assim podemos carregar varios pedaços de uma página simultanêamente 
}