const imc = (peso,altura) => peso / (altura * altura)

const situacao = (imc) => {

    if(imc < 17)
        return("Muito abaixo do peso ideal!");

    else if(imc < 18.5)
        return("Abaixo do peso!");

    else if(imc < 25)
        return("Peso normal!  (parabens)")

    else if(imc < 30)
        return("Acima do peso!")

    else if(imc < 35)
        return("Obesidade grau 1!")

    else if(imc < 40)
        return("Obesidade grau 2")

    else if(imc >= 40)
        return("Obesidade grau 3")

    else
        return("Digite valores válidos para peso e altura!!")


}
