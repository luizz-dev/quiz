import { mostrarPergunta } from "./mostrar.js";

export function proximaPergunta(perguntas, indiceObj, scoreObj) {
  const botoes = document.querySelectorAll("#alternativas button");

  // Verifica se o usuário já escolheu uma alternativa
  if (botoes.length > 0 && ![...botoes].some((btn) => btn.disabled)) {
    alert("Você precisa selecionar uma alternativa antes de continuar!");
    return;
  }

  // Avança para a próxima pergunta
  indiceObj.indice++;
  if (indiceObj.indice < perguntas.length) {
    mostrarPergunta(perguntas, indiceObj.indice, scoreObj);
  } else {
    document.querySelector(
      ".quiz-container"
    ).innerHTML = `<h2>Fim do quiz! Pontuação: ${scoreObj.score}/${perguntas.length}</h2>`;
  }
}
