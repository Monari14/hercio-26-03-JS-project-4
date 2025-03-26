//Arrowzar = otimizar por assim dizer ou simplificar um método

// Método foi arrowzado, ele espera dois valores e retorna a multiplicação

const multiplica = (a, b) => a * b;

console.log("Resultado: " + multiplica(3,4));

// Método foi arrowzado, ele espera uma String e retorna uma mensagem
const saudacao = nome =>
{
    const mensagem = "Olá, " + nome + "!";
    return mensagem;
}

console.log(saudacao("Felipe Eduardo Monari"));