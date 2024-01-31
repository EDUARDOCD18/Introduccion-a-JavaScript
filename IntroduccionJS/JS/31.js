/* 140 - Notification API */
const boton = document.querySelector('#boton')
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}.`))
})

if (Notification.permission === "granted") {
    new Notification("Esta es una notificación", {
        icon: "../../../BLOG-DE-CAFE/IMG/blog1.webp",
        body: "XD"
    })
}