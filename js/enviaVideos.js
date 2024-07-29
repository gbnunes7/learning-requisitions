import { conectaApi } from "./api.js"

const formulario = document.getElementById('form')

async function enviaVideo(evento) {
    evento.preventDefault()
    const url = document.getElementById('url').value
    const titulo = document.getElementById('titulo').value
    const imagem = document.getElementById('imagem').value
    const descricao = Math.floor(Math.random()*11).toString();

    await conectaApi.enviaVideo(titulo,descricao,url,imagem);

    window.location.href = "../pages/envio-concluido.html"

}

formulario.addEventListener("submit", evento => enviaVideo(evento))