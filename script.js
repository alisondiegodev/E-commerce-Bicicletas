const imagens = document.querySelectorAll(".bicicletas-imagens img");

imagens.forEach(galeriaClick);

function galeriaClick(imagem) {
    imagem.addEventListener('click', trocarImagem);
}
function trocarImagem(event) {
    const principal = document.querySelector("#principal")
    const clicada = event.currentTarget;
    principal.src = clicada.src

    //principal.setAttribute('src', clicada.getAttribute('src'));



}


