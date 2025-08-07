// Recibir informacion con el boton
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const error = document.querySelector(".error")
const errorLink = document.querySelector(".errorLink")
button.disabled = true
//Buton evento hover

input.addEventListener('click', () => {
    button.classList.remove("ButtonDesactivado")
    button.disabled = false
    button.classList.remove("ButtonMensaje")



})

input.addEventListener('blur', () => button.classList.add("ButtonDesactivado"))
button.addEventListener('click', () => {
    const info = input.value.trim()

    if (!info.startsWith("https://youtu.be/") && !info.startsWith("https://www.youtube.com/watch?v=")) {
        errorLink.classList.add("error2")
        button.classList.add("ButtonDesactivado")

        //button.classList.add("ButtonMensaje")


    } else {
        errorLink.classList.remove("error2")
        button.classList.remove("ButtonDesactivado")

    }

    // Mandar el video al backend
    const urlVideo = {url: info}
    
})