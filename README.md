Quiz Interativo
Este projeto é um quiz interativo feito com HTML, CSS e JavaScript. Ele permite ao usuário responder a 4 perguntas sobre programação e tecnologia. Ao final, o número de acertos e erros é exibido.

Funcionalidades
O quiz começa com uma tela inicial onde o usuário pode clicar em "Começar" para iniciar o quiz.
O quiz contém 4 perguntas de múltipla escolha, cada uma com 4 opções de resposta.
O usuário deve selecionar uma resposta para cada pergunta antes de prosseguir.
Ao final do quiz, o número de acertos e erros é exibido.
Estrutura do Código
HTML
O código HTML define a estrutura do quiz, com headers e seções para cada pergunta.
As perguntas estão divididas em diferentes <header> e são alternadas dinamicamente via JavaScript.
JavaScript
O código JavaScript gerencia a navegação entre as perguntas e calcula os acertos e erros.
Funções como comecar() e botaoOnChange() controlam o fluxo de perguntas.
Cada pergunta possui um conjunto de botões radio, e a função verifica se uma resposta foi selecionada antes de permitir o progresso.
No final, a pontuação é exibida dinamicamente ao usuário.
CSS
O CSS é responsável por estilizar as perguntas, botões e layout do quiz, tornando a experiência do usuário mais agradável.
Como Funciona
O usuário clica no botão "Começar".
Cada pergunta é exibida em sequência, e o usuário escolhe uma resposta.
Ao final, o número de respostas corretas e incorretas é mostrado.
Como Executar
Clone este repositório:
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Abra o arquivo index.html em um navegador para iniciar o quiz.
