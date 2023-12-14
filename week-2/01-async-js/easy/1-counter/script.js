function updateCounter() {
    const counterSecondsDiv = document.getElementById("counter-seconds")

    let counterSecondsVal = 0;
    const idSeconds = setInterval(() => {
        counterSecondsDiv.innerText = counterSecondsVal++;
    }, 1000)

    // clear the setInterval
    setTimeout(() => {
        clearInterval(idSeconds);
    }, 100000)
}

document.addEventListener("DOMContentLoaded", (e) => {
    updateCounter();
})
