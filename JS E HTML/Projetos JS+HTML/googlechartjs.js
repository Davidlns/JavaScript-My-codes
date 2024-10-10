let valores = [];

const addValor = (x) => {
    valores.push([valores.length+1, x]); // valores será um vetor de vetores
}

const media = () => { 
    let soma = 0;
    for(x of valores)
        soma += x[1]; // pega sempre o elemento de indice 1 nos vetores dentro do vetor geral 'valores' e depois soma todos
    return soma / valores.length; // divide a soma de todos os elementos pela quantidade de geral , o que gera uma média do vetor
}

const drawBasic = () => { // função que manipula o gráfico através do google charts

    var data = new google.visualization.DataTable(); //tabela de dados no google charts

    data.addColumn('number','Pos'); // cria uma coluna pos
    data.addColumn('number','X'); // cria uma coluna X
    data.addRows(valores); //adiciona os valores a tabela

    var options = {hAxis:{title:'Posicao'}, vAxis:{title:'Valor de X'}}; // hAxis é eixo horizontal, que tera o titulo Posicao / vAxis é o vertical, que tera o titulo de Valor de X

    var chart = new google.visualization.LineChart(document.getElementById('chart_div')); //adiciona o gráfico a uma div com o id 'chart_div', que apresentará o mesmo na página // atribui o tipo do gráfico como lineChart
    // cria o visualization de um tipo, e aponta o elemento com DOM, onde será desenhado.

    chart.draw(data, options); // manda desenhar o gráfico

}