const url = 'https://randomuser.me/api/?results=10';

async function getUsers(lista){
    const resp = await fetch(url); // faz uma solicitação de rede http para a url, e espera a resposta de modo async
    const objeto = await resp.json(); //converte a resposta recebida da url para dados Json
    let itens = "";

    for(let pessoa of objeto.results){ //para todos os elementos do objeto json faça
        itens += `<li>${pessoa.name.first} ${pessoa.name.last}</li>`; // adiciona a cada passagem do for uma linha a lista com infos, acessando as camadas do objeto pessoa/name/first....
    }
    document.getElementById(lista).innerHTML = itens; // adiciona o conteudo itens a lista recebida pela função
}