const texto = document.querySelector("span");
const imagem = document.querySelector("img");
const botoes = document.querySelector(".botao");
const iniciarContagem = botoes.querySelector(".botao1");
const abortarMissao = botoes.querySelector(".botao2");
let contagem = 10;


const comecarContagem = () => {
    const id = setInterval(() => {
        texto.innerText = `O foguete vai sair em: ${contagem}`;
        if (contagem === 0) {
            texto.innerText = 'Voa foguetinho';
            imagem.setAttribute('src', 'foguetinho.gif');
            clearInterval(id)
        }
        contagem--;
    },1000)
}

const pararContagem = () => {
    texto.innerText = "Missão abortada!"
    imagem.setAttribute('src', 'john_travolta.gif')
}

iniciarContagem.addEventListener("click", comecarContagem);
abortarMissao.addEventListener("click", pararContagem);

