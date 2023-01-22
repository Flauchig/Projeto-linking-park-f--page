console.log(document);
// o ducument repesenta o que ele vai trazer do html
// console.log() é uma função do objeto console em JavaScript que permite imprimir informações (como valores de variáveis, mensagens de erro, etc.) no console do navegador. Ele é comumente usado para depurar código, pois permite ver o estado das variáveis ​​e o fluxo de execução em diferentes pontos do código.

console.log(document.querySelector(".botao-trailer"));
// querySelector() é um método do objeto document em JavaScript que permite selecionar um elemento HTML específico a partir de seu seletor CSS. Ele retorna o primeiro elemento que corresponde ao seletor fornecido, ou null se nenhum elemento for encontrado

// const, let e var são todos usados ​​para declarar variáveis ​​em JavaScript, mas eles têm algumas diferenças importantes:
/*
const é usado para declarar variáveis ​​que não serão reatribuídas. Isso significa que uma vez que uma variável é declarada como const, ela não pode ser reatribuída com um novo valor. É uma boa prática usar const sempre que possível, pois isso ajuda a evitar erros de lógica no código.

let é usado para declarar variáveis ​​que podem ser reatribuídas. Ele se comporta de forma semelhante ao var, mas tem algumas diferenças importantes. A principais diferenças é que let tem escopo de bloco, diferente de var que tem escopo de função.

var é usado para declarar variáveis ​​que podem ser reatribuídas e tem escopo de função. Ele é o menos recomendado para usar, pois pode causar problemas de escopo e dificuldade no entendimento do código.

Em resumo, é recomendado usar const sempre que possível, e usar let quando é necessário reatribuir a variável. O uso de var é desencorajado.*/

const botaoTrailer = document.querySelector(".botao-trailer");
// identificar que o usuário clicou no botão

function alternarModal() {
  modal.classList.toggle("aberto");
}

// addEventListener é um método em JavaScript que permite adicionar um ouvinte de eventos a um elemento HTML específico. Ele é usado para detectar e responder a eventos, como cliques do mouse, carregamentos de página, digitação de teclado, etc.
botaoTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", linkDoVideo);
});

const modal = document.querySelector(".modal");
// aqui foi adcionado uma classe para abrir  o video do trailer

const BotaoFecharModal = document.querySelector(".fechar-modal");

BotaoFecharModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
  // aqui removendo o src para remover o video e ele parar  o som
});

//  aqui foi criado o botão fechar

const video = document.getElementById("video");
// pegando o elemento pelo id

const linkDoVideo = video.src;
// aqui estoou buscando o link do video que esta no html sem ter que declarar aqui no js
