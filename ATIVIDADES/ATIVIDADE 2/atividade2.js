const botao = document.getElementById("botao");
const tabText = document.getElementById("tabuada");

botao.addEventListener("click", (event) => {
    event.preventDefault();

    try {
        const numero = document.getElementById("numero");
        let numeroI = parseInt(numero.value); 

        if (isNaN(numeroI)) {
            alert("Por favor, insira um número válido.");
            return;
        }

        let resultado = "";

        for (let i = 1; i <= 10; i++) {
            let tabuada = numeroI * i;
            let paridade = tabuada % 2 === 0 ? "par" : "ímpar";

            resultado += `${numeroI} x ${i} = ${tabuada} | ${paridade} <br>`;
        }

        tabText.innerHTML = resultado;

    } catch (error) {
        alert("Erro: " + error.message);
    }  
});

/*
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

*/