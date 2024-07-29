import { conectaApi } from "./api.js";

const divVideos = document.getElementById('videos__container')

window.addEventListener('DOMContentLoaded',async () => {
    const videos = await listaVideo()
    displayVideos(videos)
})

async function listaVideo() {
    const lista = await conectaApi.listaVideos();
    return lista
 }

 function displayVideos(videoItems) {
    
    let displayVideos = videoItems.map((video) => {
        return `<li class="videos__item">
                    <iframe width="100%" height="72%" src=${video.url}
                        title=${video.titulo} frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img src=${video.imagem} alt="logo canal alura">
                        <h3>${video.titulo}</h3>
                        <p>${video.descricao}</p>
                    </div>
                </li>`;
    });

    displayVideos = displayVideos.join("");
    divVideos.innerHTML = displayVideos;
}
