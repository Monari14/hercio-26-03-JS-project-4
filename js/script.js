let numero = prompt("Número: ");
if(!isNaN(numero))
{
    console.log(imprimirTabuada(numero));
}else{
    console.log("sexooooooooo");
}

function imprimirTabuada(numero)
{
    for (let i = 1; i <= 10; i++) 
    {
        const valor = numero * i;
        let mensagem;
        console.log(numero + " x "+ i + ": " + valor);
        if(valor % 2 === 0)
        {
            mensagem = valor + " é par!";
        }
        else
        {
            mensagem = valor + " é ímpar!";
        }
        console.log(mensagem);
        
    }
}

