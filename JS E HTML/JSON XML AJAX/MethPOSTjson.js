async function postName(){
    const object = {name:'James Gordon'}; //cria um objeto no estilo JavaScript
    const response = await fetch('/api/names',{method:'POST', body: JSON.stringify(object), headers:{'Content-Type': 'application/json'}});
    // body se trata do corpo da requisição // JSON.stringify, pega o objeto e transforma em string e joga para o body // headers: {avisa ao servidor que está mandando um JSON}

const responseText = await response.text();
console.log(responseText);// 'OK' // supoe que o servidor retorna uma resposta de texto // pode ter casos onde não retorna nada, e olhamos através do status // 200 foi sucesso
}
postName();