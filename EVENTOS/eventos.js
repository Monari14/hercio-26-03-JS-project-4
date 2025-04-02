// PEGA OS VALORES DOS INPUT QUANDO CLICA
// NO BOTÃO E SETA NO PARÁGRAFO "alterar"
const botao = document.getElementById("botao");
botao.addEventListener(
    "click", () => 
    {
        // get the valores thos inputs
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        // alert of foi cliqued
        alert("Botão foi clicado!");
        // get the valor of paragrafo
        const alterar = document.getElementById("alterar");
        // set the variabous no paragrifo
        alterar.innerHTML = `${nome} | ${email}`;
    }
);

/* SERVE PRA PEGAR AUTOMATICAMENTE O TEXTO (LETRA POR LETRA)
const campoTexto = document.getElementById("nome");
campoTexto.addEventListener("input", (event) => {
    console.log("Valor atual: ", event.target.value);
});
*/
