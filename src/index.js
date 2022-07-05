async function carregarPage() {
    await App.requisicao()
    App.imageMedia()
}

carregarPage()
document.querySelector(".btnStyle").addEventListener("click", () =>{
    App.modoNoturno()
})