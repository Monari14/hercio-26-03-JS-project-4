const tela = document.getElementById("operacao");

function handleButtonClick(value) {
    tela.innerHTML += value;
}

const buttonIds = [
    "valor0", 
    "valor1", 
    "valor2", 
    "valor3", 
    "valor4", 
    "valor5", 
    "valor6", 
    "valor7", 
    "valor8", 
    "valor9", 
    "valorVirgula", 
    "valorVezes", 
    "valorDivisao", 
    "valorDiminuir", 
    "valorSomar" ,
];

buttonIds.forEach(id => {
    const button = document.getElementById(id);
    button.addEventListener("click", () => handleButtonClick(button.textContent));
});

const botao = document.getElementById("valorIgual");
botao.addEventListener(
    "click", () => {
        try {
            const valoresTela = tela.textContent;
            const resultado = eval(valoresTela.replace("x", "*").replace(",", "."));
            const historico = tela.textContent;

            tela.textContent = `${historico} = ${resultado}`;
        } catch (error) {
            tela.textContent = "Erro";
        }
    }
);

const apagarUmPorUm = document.getElementById("valorApagar");
apagarUmPorUm.addEventListener(
    "click", () => {
        tela.textContent = tela.textContent.slice(0, -1);
    }
);

const apagarTudo = document.getElementById("valorC");
apagarTudo.addEventListener(
    "click", () => {
        tela.textContent = "";
    }
);