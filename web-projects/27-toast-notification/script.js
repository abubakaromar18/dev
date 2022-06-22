const btn = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four',]
const type = ['info', 'error', 'success']

btn.addEventListener('click', () => createNotification())


function createNotification(){
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.classList.add(getRandomType())

    notification.innerText = getRandomMessage()

    toasts.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 2500)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
    return type[Math.floor(Math.random()* type.length)]
}