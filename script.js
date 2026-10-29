// nome e destino são parâmetros da função.
function saudarVoluntario(nome, destino) {
    const paragrafo = document.getElementById(destino);
    paragrafo.textContent = "Obrigado, " + nome + "!";
   
}
saudarVoluntario("Ana", "saudacao1" )

/*function saudarVoluntario1(nome1, destino1) {
    const paragrafo = document.getElementById(destino1);
    paragrafo.textContent = "Bem-vindo, " + nome1 + "!";
}
saudarVoluntario1("Felipe", "saudacao2" )*/

function saudarVoluntario1(nome1, destino1) {
    const paragrafo = document.getElementById(destino1);
    paragrafo.textContent = "Bem-vindo, " + nome1 + "!";
    paragrafo.style.color = "red";
    paragrafo.style.fontSize = "20px";
}
saudarVoluntario1("Felipe", "saudacao2" )
