const bodyEl = document.getElementById('body');
const textEl = document.getElementById('hex');
const changeButton = document.getElementById('change-color');
const autoButton = document.getElementById('auto');
const stopButton = document.getElementById('stop');

const hexValues = '1ABC234D56789EF'

changeButton.addEventListener('click', () => {
    const color = chnageBackgroundColor()
    textEl.innerHTML = color;
    bodyEl.style.background = color;
})

let intervalCall = ''
autoButton.addEventListener('click', () => {
    intervalCall = setInterval(function () {
        const color = chnageBackgroundColor()
        textEl.innerHTML = color;
        bodyEl.style.background = color;
    }, 1000)
})

stopButton.addEventListener('click', () => {
    if (intervalCall)
        clearInterval(intervalCall);
})

function chnageBackgroundColor() {
    let generatedColor = '#';
    for (let i = 0; i < 6; i++) {
        generatedColor += hexValues[Math.floor(Math.random() * 9)]
    }
    return generatedColor
}






