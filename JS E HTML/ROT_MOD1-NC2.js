const fatorial = (x) => (x < 2) ?1: (x * fatorial(x-1));

function somatorio (valores) {return valores.reduce((a,b) => a+b);}