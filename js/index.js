
const listaDeReceitas = [];
const inputTitulo = document.querySelector("#titulo");
const selectDificuldade = document.querySelector("#dificuldade");
const textAreaIngredientes = document.querySelector("#ingredientes");
const textAreaPreparo = document.querySelector("#preparo");
const inputVideo = document.querySelector("#link");
const addReceitas = document.querySelector(".painel-receitas")

const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.onclick = () => {
const inputVegano = document.querySelector("input[name='vegano']:checked");
const novaReceita = {
  titulo: inputTitulo.value,
  dificuldade: selectDificuldade.value,
  ingredientes: textAreaIngredientes.value,
  preparo: textAreaPreparo.value,
  video: inputVideo.value,
  vegano: inputVegano.value,
  view: false,
};
listaDeReceitas.push(novaReceita);

alert("Cadastrado com sucesso!");

console.log(listaDeReceitas);

exibirReceitas()

};

function exibirReceitas() {
    listaDeReceitas.forEach((receita) => {
        if (receita.view) return;

        const novaReceita = `
        <article>
                <h2>${receita.titulo}</h2>
                <small>Dificuldade: ${receita.dificuldade}</small>
                <p>${receita.preparo}<p>
                </article>
                `;
                receita.view = true;
                addReceitas.innerHTML += novaReceita;


    });
}





