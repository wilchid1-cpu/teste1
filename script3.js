// Localiza o botão e o painel pelo id do HTML.
const botaoParticipar = document.getElementById("botaoParticipar");
const painelParticipar = document.getElementById("painelParticipar");
 
// Oculta o painel quando o JavaScript é executado.
painelParticipar.style.display = "none";
 
// A função de clique será criada no próximo slide.

// Alterna a visibilidade quando ocorre um clique.
function alternarParticipacao() {
    // Verifica se o painel está oculto.
    if (painelParticipar.style.display === "none") {
        painelParticipar.style.display = "block";
        botaoParticipar.textContent = "Ocultar oportunidades";
    } else {
        // Se estiver visível, esconde o painel.
        painelParticipar.style.display = "none";
        botaoParticipar.textContent = "Ver oportunidades";
    }
}

botaoParticipar.addEventListener("click",alternarParticipacao);
