
const a  = [12, 54, 23]; // vetor 1
const b = [99, 30, 45]; // vetor 2
let c =  a.concat(b); //junta dois vetores
c.sort(); //ordenando o vetor
c.reverse(); // colocando na ordem reversa
c = c.filter((x) => (x > 20 && x < 90)); //filtra os valores dos vetores que são maiores que 20 e menor que 90

document.getElementById("demo").innerHTML = c.join(" :: "); //mostra o resultado, e acrescenta um separador :: para todos os dados do vetor