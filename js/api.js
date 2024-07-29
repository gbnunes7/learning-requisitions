async function listaVideos() {
     const busca = await fetch('http://localhost:3000/videos'); //requisição GET para o banco de dados do servidor
     const videos = await busca.json()

     return videos
 }

async function enviaVideo(titulo,descricao,url,imagem) {
    const envia = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo:titulo,
            descricao: `${descricao} mil visualizações`,
            url:url,
            imagem: imagem
        })
    })

    const enviaVideos = await envia.json()
    return enviaVideos
}


 export const conectaApi = {listaVideos,enviaVideo}
 