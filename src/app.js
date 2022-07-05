class App {
    static async requisicao() {
        await fetch("https://kenzie-news-api.herokuapp.com/api/news")
        .then(response => {
            return response.json()
        }).then(respons => {
            respons.forEach((noticia, index) => {
                if(index == 1){
                    App.template(noticia, true)
                } else{
                    App.template(noticia, false)
                }
            })
        })
    }

    static template(noticia, isOne) {
        const listaNoticias = document.querySelector(".main__listArticle")
        const li = document.createElement("li")
        const article = document.createElement("article")
        const container = document.createElement("div")
        const containerImg = document.createElement("div")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const a = document.createElement("a")
        const p = document.createElement("p")
        const span = document.createElement("span")
    
        li.className = "listArticle__container"
        article.className = "listArticle__article"
        container.className = "article__container"
        img.className = "article__img"
        img.src = noticia.imagem
        containerImg.className = "article__containerImg"
        h3.innerText = noticia.categoria
        a.innerText = noticia.titulo
        a.href = noticia.noticia_completa
        a.target = "_blank"
        p.innerText = noticia.resumo
        span.innerText = "Fonte: " + noticia.fonte
    
        container.append(h3, a, p, span)
        containerImg.appendChild(img)
        article.append(container, containerImg)
        if (isOne){
            this.primeiraNoticiaLink += noticia.imagem
            const primeiroArticle = document.querySelector("#articleOne")

            container.className = "article__container--1"
            containerImg.className = "article__containerImg--1"

            primeiroArticle.append(container, containerImg)
        } else{
            li.appendChild(article)
            listaNoticias.appendChild(li)
        }
    }

    static imageMedia(){
        document.documentElement.style.setProperty('--background-image', `url(${this.primeiraNoticiaLink})`)
    }

    static primeiraNoticiaLink = ""

    static modoNoturno(){
        const btn = document.getElementById("darkReader")
        if(document.getElementById("darkReader").className == "white"){
            btn.className = "black"

            document.documentElement.style.setProperty('--white', 'rgb(17, 17, 17)')
            document.documentElement.style.setProperty('--white-min', '#1B1C1E')
            document.documentElement.style.setProperty('--black', '#FFFFFF')
            document.documentElement.style.setProperty('--white-max', 'rgb(0, 0, 0)')
            document.documentElement.style.setProperty('--grey', '#1B1C1E')
        } else{
            btn.className = "white"
            document.documentElement.style.setProperty('--white', '#FFFFFF')
            document.documentElement.style.setProperty('--white-min', '#fff6f6')
            document.documentElement.style.setProperty('--black', '#1B1C1E')
            document.documentElement.style.setProperty('--white-max', '#D7E4FB')
            document.documentElement.style.setProperty('--grey', '#EEEEEE')
        }
    }
}