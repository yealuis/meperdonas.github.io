let gif = document.getElementById('gifContainerImg')
let happyImages = ['love1.gif','love2.gif','love3.gif','love4.gif','love5.gif']
let sadImages = ['sorry1.gif','sorry2.gif','sorry3.gif','sorry4.gif']
let noMessage = ['¡Oh no! ¿Estás segura?','¡¿Realmente estas segura?!','Estás segura de verdad, ¿eh?',
    '¿Yo te amo, amor?','Di que si por favor?','Solo piensalo','Si dices que no, estaré muy triste',
    'Super triste','Estaré muy muy muy triste','Estaré muy muy muy muy triste.','por favooooooor',
    'Esta bien, ya dejaré de preguntar...','Es broma, POR FAVOR DI SÍ','Amoooooooooorrrrrrr :(.',
    'Estás rompiendo mi corazón :(','NO... ya di que si, por favor','Amor Siiiiiiiiiiiiiiiiiiiiiiiiiii']
countImg = -1
countMsg = -1

let changeImage = (images) => {
    (countImg !== images.length - 1) ? countImg++ : countImg = 0
    gif.src = `/images/${images[countImg]}`
}

let noBtnPosition = () => {
    let buttonStyle = document.getElementById("noButton").style
    // Mover de forma aleatoria el boton
    posX = Math.floor(Math.random() * 100)
    posY = Math.floor(Math.random() * 100)
    buttonStyle.position = 'absolute'
    buttonStyle.left = posX + "%"
    buttonStyle.top = posY + "%"
}

document.getElementById('yesButton').addEventListener('click', function() {
    let questions = document.getElementById('questions')
    changeImage(happyImages)
    questions.innerHTML = `
    <p id='messageContainer'>¡Siiiiii ammmoooooorrrr, sabia me perdonarias!</p>
    <p id='messageContainer2'>¡TE AMOOOOOOOOOOOOOOOOO!</p>`
    setInterval(() => {
        changeImage(happyImages)
    }, 1000);
})

let noButton = () => {
    //Cambiar el mensaje
    (countMsg !== noMessage.length - 1) ? countMsg++ : countMsg = 0
    document.getElementById('noButton').innerHTML = noMessage[countMsg]

    changeImage(sadImages)
    noBtnPosition()
}