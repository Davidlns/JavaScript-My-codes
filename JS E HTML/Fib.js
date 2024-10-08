// RECURSIVA //
// é a forma que parece mais natural e mais elegante, mas não é a mais eficiente // 

const fiboRec = (x) => {
    return (x == 0 || x == 1) ? 1 : (FiboRec(x-1) + FiboRec(x - 2));
}

// -----------------------------------------------------------------------------//
// ----------------------------Função não Recursiva-----------------------------//

const fibonacci = (x) => {
    if(x==0 || x == 1)
        return 1;

    let fm1 = 1, fm2 = 1, fm;
    for(let i = 2; i <= x; i++){
        fm = fm1 + fm2;
        fm2 = fm1;
        fm1 = fm;
    }
    return fm;
}
