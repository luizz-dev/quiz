const inicioQuiz = document.getElementById("inicio");
const pergunta1Q = document.getElementById("pergunta1");
const pergunta2Q = document.getElementById("pergunta2");
const pergunta3Q = document.getElementById("pergunta3");
const pergunta4Q = document.getElementById("pergunta4");
const respostaFinal = document.getElementById("respostaFinal");
const opcaoCliada = document.getElementById("opcoes");

let acertos = 0;
let erros = 0;

function comecar() {
  inicioQuiz.style.display = "none";
  pergunta1Q.style.display = "grid";
}
function botaoOnChange() {
  const um = document.getElementById("um");
  const dois = document.getElementById("dois");
  const tres = document.getElementById("tres");
  const quatro = document.getElementById("quatro");
  if (
    um.checked == true ||
    dois.checked == true ||
    tres.checked == true ||
    quatro.checked == true
  ) {
    if (um.checked == true) {
      acertos++;
    } else {
      erros++;
    }
    pergunta1Q.style.display = "none";
    pergunta2Q.style.display = "grid";
  } else {
    alert("Selecione uma resposta");
  }

  console.log(acertos, erros);
}

function botaoOnChange2() {
  const um = document.getElementById("um2");
  const dois = document.getElementById("dois2");
  const tres = document.getElementById("tres2");
  const quatro = document.getElementById("quatro2");
  if (
    um.checked == true ||
    dois.checked == true ||
    tres.checked == true ||
    quatro.checked == true
  ) {
    if (um.checked == true) {
      acertos++;
    } else {
      erros++;
    }
    pergunta2Q.style.display = "none";
    pergunta3Q.style.display = "grid";
  } else {
    alert("Selecione uma resposta");
  }

  console.log(acertos, erros);
}

function botaoOnChange3() {
  const um = document.getElementById("um3");
  const dois = document.getElementById("dois3");
  const tres = document.getElementById("tres3");
  const quatro = document.getElementById("quatro3");
  if (
    um.checked == true ||
    dois.checked == true ||
    tres.checked == true ||
    quatro.checked == true
  ) {
    if (um.checked == true) {
      acertos++;
    } else {
      erros++;
    }
    pergunta3Q.style.display = "none";
    pergunta4Q.style.display = "grid";
  } else {
    alert("Selecione uma resposta");
  }

  console.log(acertos, erros);
}

function botaoOnChange4() {
  const um = document.getElementById("um4");
  const dois = document.getElementById("dois4");
  const tres = document.getElementById("tres4");
  const quatro = document.getElementById("quatro4");
  const calculoTela = document.getElementById("calculoFinal");
  if (
    um.checked == true ||
    dois.checked == true ||
    tres.checked == true ||
    quatro.checked == true
  ) {
    if (um.checked == true) {
      acertos++;
    } else {
      erros++;
    }
    pergunta4Q.style.display = "none";
    respostaFinal.style.display = "flex";
    calculoTela.innerHTML = `Você teve ${acertos} acertos e ${erros} erros`;
  } else {
    alert("Selecione uma resposta");
  }

  console.log(acertos, erros);
}
