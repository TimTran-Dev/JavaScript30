function setDate() {
    const now = new Date();
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    const secondHand = document.querySelector('.second-hand')
    console.log(secondHand)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    const minute = now.getMinutes()
    const minutesDegrees = ((minute / 60) * 360) + 90
    const minuteHand = document.querySelector('.min-hand')
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    const hours = now.getHours()
    console.log(hours)
    const hoursDegrees = ((hours / 12) * 360) + 90
    const hourHand = document.querySelector('.hour-hand')
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)