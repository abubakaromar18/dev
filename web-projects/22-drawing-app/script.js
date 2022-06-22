const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

let x
let y
let isPressed = false
let size = 20
let color = 'white'

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY

    console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined

    console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

function drawCircle(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI *2, true)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke() 
}


colorEl.addEventListener('change', (e) => color = e.target.value)

increaseBtn.addEventListener('click', () => {
    size++

    if(size > 50){
        size = 50
    }
    updateSize()
})

decreaseBtn.addEventListener('click', () => {
    size--
    if(size <= 5){
        size = 5
    }

    updateSize()
})

clearBtn.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

function updateSize(){
    sizeEl.innerText = size;
}
