function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}h ${minutos}m ${segundos}s.`

    if (hora >= 6 && hora <= 12) {
        img.src = "fotomanha.jpg"
        document.body.style.background = "#2E5E86"
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = "fototarde.jpg"
        document.body.style.background = "#9f6e0cff"
    } else {
        img.src = "fotonoite.jpg"
        document.body.style.background = "#05171B"
    }
}

setInterval(carregar, 1000)