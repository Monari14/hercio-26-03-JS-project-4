const botao = document.getElementById("botao");
const numero = document.getElementById("numero");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", (event) => {
    event.preventDefault();
    try {
        let gerar = Math.random() * 10;
        let parsear = parseInt(gerar);
        console.log(parsear);
    } catch (error) {
        alert("Erro: " + error.message);
    }  
});

function gerar() {
    let gerar = Math.random() * 10;
    let parsear = parseInt(gerar);
}