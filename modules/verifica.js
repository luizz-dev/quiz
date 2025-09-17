const resultadoEl = document.getElementById("resultado");
const placarEl = document.querySelector("#placar h3");

export function verificarResposta(i, indice, perguntas, scoreObj) {
  const correta = perguntas[indice].correta;
  const botoes = document.querySelectorAll("#alternativas button");

  // Se algum botão já está desabilitado, significa que já respondeu
  if ([...botoes].some((btn) => btn.disabled)) {
    alert("Você já selecionou sua resposta.");
    return;
  }

  botoes.forEach((btn) => (btn.disabled = true));

  const btnClicado = botoes[i];

  if (i === correta) {
    scoreObj.score++;
    btnClicado.style.backgroundColor = "green";
  } else {
    btnClicado.style.backgroundColor = "red";

    botoes[correta].style.backgroundColor = "green";
  }

  // Atualiza o placar
  placarEl.textContent = `Pontuação: ${scoreObj.score}`;
}
