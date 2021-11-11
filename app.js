const iniciar=  () => {

    let nota1 = parseFloat(prompt("Digite a nota 1 "));
    let nota2 =  parseFloat(prompt("Digite a nota 2 "));
    let nota3 =  parseFloat(prompt("Digite a nota 3 "));
    let nota4 =  parseFloat(prompt("Digite a nota 4"));

    let soma = nota1 +  nota2 + nota3 + nota4;

    let result  = soma / 4;

    if(result > 6)
    {
        alert(`Você ficou com ${result} Resultado: Aprovado`)
    }
    else if(result < 5)
    {
        alert(`Você ficou com ${result} Resultado: Reprovado`)
    }
    else if(result >= 5 || result <= 6)
    {
        alert(`Você ficou com ${result} Resultado: Em recuperação`)
    }
    
}

document.addEventListener('DOMContentLoaded' , iniciar);