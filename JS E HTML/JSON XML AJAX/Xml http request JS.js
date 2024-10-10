//requisção assincrona com AJAX
function alterar() {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:4200/assents/teste.txt'); //faz o tipo da requisição tipo GET, um arquivo em um servidor
    request.onload = () => {console.log(request.responseText);} //request onload carrega o arquivo // após carregar, joga para o console o que veio para o servidor
    request.send() // envia solicitação
}


$("#cmd1").on("click", (event) => {hiddenBox.show()});