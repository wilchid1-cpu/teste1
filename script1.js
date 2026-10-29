// Localiza os dois elementos da página.
const acao1 = document.getElementById("botaoAjuda");
const aviso = document.getElementById("aviso");
 
// Decla/ra a ação a realizar.
function mostrarAjuda() {
    aviso.textContent = "Você pode ser voluntário!";
}
 
// Executa a função a cada clique.
acao1.addEventListener("click", mostrarAjuda);
