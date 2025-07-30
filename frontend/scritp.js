// Recibir informacion con el boton
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const error = document.querySelector(".error")
const errorLink = document.querySelector(".errorLink")



button.addEventListener('click', () => {
    const info = input.value
    const link = info.startsWith("https://youtu.be/")
    if (info === "") {
        errorLink.classList.remove("error2")
        error.classList.add("error2")
    } else {
        error.classList.remove("error2")
        if (!link) {
            errorLink.classList.add("error2")
        } else { errorLink.classList.remove("error2") }
    }


})