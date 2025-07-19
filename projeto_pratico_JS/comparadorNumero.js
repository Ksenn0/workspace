function comparador(num1, num2){
    const igualdade = num1 === num2;
    const soma = num1 + num2;
    const maiorMenor = ['maior que 10', 'menor que 10', 'maior que 20', 'menor que 20']
    const msgIgual = igualdade? 'são iguais' : 'não são iguais'

    if(typeof num1 !== "number" || typeof num2 !== "number" || isNaN(num1) || isNaN(num2)){
        console.log("Insira números válidos!")
    }else{
        if(soma >= 20){
            console.log(`Os números ${num1} e ${num2} ${msgIgual}, a soma deles é ${soma}, que é ${maiorMenor[0]} e ${maiorMenor[2]}`);
        }else if(soma >= 10 && soma < 20){
            console.log(`Os números ${num1} e ${num2} ${msgIgual}, a soma deles é ${soma}, que é ${maiorMenor[0]} e ${maiorMenor[3]}`);
        }else{
            console.log(`Os números ${num1} e ${num2} ${msgIgual}, a soma deles é ${soma}, que é ${maiorMenor[1]} e ${maiorMenor[3]}`);
        }
    }
}

comparador(1, 2);