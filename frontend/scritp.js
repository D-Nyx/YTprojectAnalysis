// Recibir informacion con el boton
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const error = document.querySelector(".error")
const errorLink = document.querySelector(".errorLink")
const MensajeDeCarga = document.querySelector(".CargandoElMensajeDeEsperaDesactivado")
button.disabled = true
//Buton evento hover

input.addEventListener('input', () => {
    button.classList.remove("ButtonDesactivado")
    button.disabled = false
    button.classList.remove("ButtonMensaje")

})

input.addEventListener('blur', () => button.classList.add("ButtonDesactivado"))
button.addEventListener('click', () => {
    const info = input.value.trim()

    if (!info.startsWith("https://youtu.be/") && !info.startsWith("https://www.youtube.com/watch?v=")) {
        errorLink.classList.add("error2")
        MensajeDeCarga.classList.remove("CargandoElMensajeDeEspera")
        MensajeDeCarga.classList.add("CargandoElMensajeDeEsperaDesactivado")


        //button.classList.add("ButtonMensaje")

    } else {
        errorLink.classList.remove("error2")
        button.classList.remove("ButtonDesactivado")
        MensajeDeCarga.classList.remove("CargandoElMensajeDeEsperaDesactivado")
        MensajeDeCarga.classList.add("CargandoElMensajeDeEspera")

        

    }
 


const infoObjet = {link:info}
const InformacionJson = JSON.stringify(infoObjet)
fetch("http://localhost:3000/YTinfo", {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: InformacionJson
})


})