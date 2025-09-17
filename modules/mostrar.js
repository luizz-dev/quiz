import { verificarResposta } from "./verifica.js";

const perguntaEl = document.getElementById("pergunta");
const alternativasEl = document.getElementById("alternativas");
const resultadoEl = document.getElementById("resultado");

export function mostrarPergunta(perguntas, indice, scoreObj) {
  resultadoEl.textContent = "";
  const q = perguntas[indice];
  perguntaEl.textContent = q.pergunta;

  alternativasEl.innerHTML = "";
  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(i, indice, perguntas, scoreObj);
    alternativasEl.appendChild(btn);
  });
}
