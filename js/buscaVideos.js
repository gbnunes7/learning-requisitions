import { conectaApi } from "./api.js";
const btnPesquisa = document.getElementById('pesquisarBtn')
const div = document.getElementById('videos__container')

async function filtroBusca(evento) {
    evento.preventDefault()
    const campoPesquisa = document.getElementById('pesquisar').value;
    console.log(campoPesquisa)
    const busca = await conectaApi.buscaVideo(campoPesquisa);
    a(busca)
    

}
function a(busca) {
    let displayVideos = busca.map((video) => {
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
    displayVideos = displayVideos.join("")
    
    div.innerHTML = displayVideos
}

btnPesquisa.addEventListener('click',evento => {
    filtroBusca(evento)
})
