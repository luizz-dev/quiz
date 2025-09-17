import { mostrarPergunta } from "./modules/mostrar.js";
import { proximaPergunta } from "./modules/proxima.js";
import { verificarResposta } from "./modules/verifica.js";

const indiceObj = { indice: 0 };
const scoreObj = { score: 0 };

// Carrega perguntas do JSON
fetch("./perguntas.json")
  .then((res) => res.json())
  .then((perguntas) => {
    // Inicializa quiz
    mostrarPergunta(perguntas, indiceObj.indice, scoreObj);

    // Expõe para o HTML
    window.proximaPergunta = () =>
      proximaPergunta(perguntas, indiceObj, scoreObj);
    window.verificarResposta = (i) =>
      verificarResposta(i, indiceObj.indice, perguntas, scoreObj);
  })
  .catch((err) => console.error("Erro ao carregar perguntas:", err));
