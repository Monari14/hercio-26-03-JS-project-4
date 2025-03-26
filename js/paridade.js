function verificarParidade(numero)
{
    let mensagem;
    console.log("Número: " + numero);

    if(numero % 2 === 0)
    {
        mensagem = "O número é par!";
    }
    else
    {
        mensagem = "O número é ímpar!";
    }
    return mensagem;
}

console.log(verificarParidade(7));